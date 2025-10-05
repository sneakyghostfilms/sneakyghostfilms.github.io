#!/usr/bin/env python3
"""
make_sgf_assets.py — Generate WebP and 400w JPEG variants for Sneaky Ghost Films homepage.
Run from the repo root. Requires: pip install pillow
Creates for each portfolio image like files/uploads/films/foo_800x600.jpg:
  - files/uploads/films/foo_800x600.webp
  - files/uploads/films/foo_400w.webp
  - files/uploads/films/foo_400w.jpg
Safe to re-run; skips existing outputs by default.
"""
import re, sys, os
from pathlib import Path
try:
    from PIL import Image
except Exception as e:
    print("Pillow not installed. Run:  pip install pillow", file=sys.stderr)
    raise

ROOT = Path(__file__).resolve().parent
IMAGEDIR = ROOT / "files" / "uploads" / "films"
PAT = re.compile(r'_(\d{2,4})x(\d{2,4})\.(jpg|jpeg|png)$', re.I)

QUALITY_WEBP = 80
QUALITY_JPG  = 82

def make_variants(src: Path):
    m = PAT.search(src.name)
    if not m:
        return None
    ow, oh, ext = int(m.group(1)), int(m.group(2)), m.group(3).lower()
    name = src.stem[:src.stem.rfind("_")]  # 'karma_800x600' -> 'karma'
    dst_webp_full = src.with_name(f"{src.stem}.webp")
    dst_webp_400  = src.with_name(f"{name}_400w.webp")
    dst_jpg_400   = src.with_name(f"{name}_400w.jpg")

    # Skip if all exist
    if dst_webp_full.exists() and dst_webp_400.exists() and dst_jpg_400.exists():
        return ("skip", src)

    img = Image.open(src).convert("RGB")

    # Full-size webp
    if not dst_webp_full.exists():
        img.save(dst_webp_full, "WEBP", quality=QUALITY_WEBP, method=6)

    # 400w variants
    if ow > 0 and oh > 0:
        new_w = 400
        new_h = int(oh * (new_w / ow))
        try:
            small = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        except Exception:
            small = img.resize((new_w, new_h), Image.LANCZOS)
        if not dst_webp_400.exists():
            small.save(dst_webp_400, "WEBP", quality=QUALITY_WEBP, method=6)
        if not dst_jpg_400.exists():
            small.save(dst_jpg_400, "JPEG", quality=QUALITY_JPG, optimize=True)

    return ("ok", src)

def main():
    if not IMAGEDIR.exists():
        print(f"Image dir not found: {IMAGEDIR}", file=sys.stderr)
        sys.exit(1)

    inputs = [p for p in IMAGEDIR.iterdir() if PAT.search(p.name)]
    if not inputs:
        print("No portfolio images found to process. Nothing to do.")
        return

    done, skipped = 0, 0
    for p in inputs:
        res = make_variants(p)
        if not res:
            continue
        status, _ = res
        if status == "ok":
            done += 1
        else:
            skipped += 1

    print(f"Assets generated. Processed: {done}, skipped existing: {skipped}")
    print("Tip: Commit the new files and deploy. Your index.html with <picture> will start using them automatically.")

if __name__ == "__main__":
    main()
