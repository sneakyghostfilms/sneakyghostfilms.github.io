document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
        performSearch();
    });
    document.getElementById("yarnAdLink").addEventListener("click", function(event) {
        event.preventDefault();
        toggleYarnDisplay(true);
        setTimeout(showVirusScanner, 6000);
    });

    document.getElementById("startScan").addEventListener("click", startVirusScan);
    document.getElementById("ignoreViruses").addEventListener("click", ignoreViruses);
    document.getElementById("fixViruses").addEventListener("click", fixViruses);
    // Display the yarn ad as a popup after 5 seconds


    // Close the popup when it's clicked
    document.getElementById("yarnAd").addEventListener("click", function() {
        document.getElementById("yarnAd").style.display = "none";
    });
    document.addEventListener("click", function(event) {
        // We check if the yarnAd is being displayed.
        if (document.getElementById("yarnAd").style.display === "block") {
            // We check if the click is inside the yarnAdLink or closeAd, in which case, we don't close the ad.
            if (!event.target.closest("#yarnAdLink") && !event.target.closest("#closeAd")) {
                document.getElementById("yarnAd").style.display = "none";
            }
        }
    });

    // Close the ad when the close button is clicked
    document.getElementById("closeAd").addEventListener("click", function() {
        document.getElementById("yarnAd").style.display = "none";
    });
});

function performSearch() {
    var searchTerm = document.getElementById("searchInput").value || "error tensor dimension mismatch";
    document.querySelector("#searchQuery p").innerHTML = 'Showing results for: <em>' + searchTerm + '</em>';
    
    // Hide the initial search form and show the search results
    document.getElementById("initialSearch").style.display = "none";
    document.getElementById("searchEngine").style.display = "block";
    document.querySelector('header').style.display = 'flex'; // Show header
    document.querySelector('footer').style.display = 'block'; // Show footer
    setTimeout(function() {
        document.getElementById("yarnAd").style.display = "block";
    }, 5000);
    // Logic to fetch and display actual search results
    // ...
}

function toggleYarnDisplay(show) {
    document.getElementById("searchEngine").style.display = show ? "none" : "block";
    document.body.style.background = '#f4f4f4';
    // document.getElementById("headerContent").style.display = 'none';
    document.querySelector('header').style.display = 'none'; // Hide the entire header
    document.querySelector('footer').style.display = 'none'; // Show footer
    document.getElementById("yarnDisplay").style.display = show ? "grid" : "none";
    document.getElementById("craftDepotHeader").style.display = show ? "flex" : "none"; // Use flex to apply the flexbox styles
}

function showVirusScanner() {
    document.getElementById("virusScanner").style.display = "block";
}

function startVirusScan() {
    document.getElementById("scannerStatus").innerHTML = "Scanning...";
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            scanComplete();
        } else {
            progress++;
            document.getElementById("progressBar").style.width = progress + '%';
        }
    }, 50); // Adjust time interval as needed
}

function scanComplete() {
    document.getElementById("scannerStatus").innerHTML = "183 viruses found.";
    toggleScanButtons(true);
}

function ignoreViruses() {
    document.getElementById("scannerStatus").innerHTML = "183 viruses ignored.";
    setTimeout(hideVirusScanner, 2000);
}

function fixViruses() {
    document.getElementById("scannerStatus").innerHTML = "183 viruses fixed.";
    setTimeout(hideVirusScanner, 2000);
}

function toggleScanButtons(show) {
    document.getElementById("startScan").style.display = show ? "none" : "inline";
    document.getElementById("ignoreViruses").style.display = show ? "inline" : "none";
    document.getElementById("fixViruses").style.display = show ? "inline" : "none";
}

function hideVirusScanner() {
    document.getElementById("virusScanner").style.display = "none";
}
