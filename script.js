function redirectToPackageTypes(packageType){
    window.location.href = "packagetypes.html?type=" + packageType
}
function redirectToPackages(packageType){
    window.location.href = "packages.html?type=" + packageType
}
document.addEventListener('DOMContentLoaded', function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const packageType = urlParams.get('type');
    const pkgTypesDiv = document.getElementById('pkgTypesDiv');
    var dynamicElement = document.getElementById("hometext");
        dynamicElement.innerHTML = packageType;
    if (packageType === 'Mobile') {
        
        fetch('Packages.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                Mobile = data["Mobile"];
    
                for (let i = 0; i < Mobile.length; i++) {
                    const MobileBtn = document.createElement('button');
                    MobileBtn.innerText = Mobile[i].name;
                    pkgTypesDiv.appendChild(MobileBtn);
                    MobileBtn.classList.add('pkgButton');
                    MobileBtn.addEventListener('click', function () {
                        redirectToPackages(Mobile[i].name);
                    });
                }
            });
    }
    else if (packageType === 'HBB') {
        fetch('Packages.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                HBB = data["HBB"];
    
                for (let i = 0; i < HBB.length; i++) {
                    const HBBBtn = document.createElement('button');
                    HBBBtn.innerText = HBB[i].name;
                    pkgTypesDiv.appendChild(HBBBtn);
                    HBBBtn.classList.add('pkgButton');
                    HBBBtn.addEventListener('click', function () {
                        redirectToPackages(HBB[i].name);
                    });
                }
            });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const packageType = urlParams.get('type');

    const packagesDiv = document.getElementById('packagesDiv');
    fetch('Packages.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const HBB = data["HBB"];
                const Mobile = data["Mobile"];
                const DTV = data["DTV"]

                for (let p = 0; p < 6; p++){
                    if (packageType === Mobile[p].name) {
                         for (let i = 0; i < Mobile[p].packages.length; i++) {
                            const MblBtn = document.createElement('button');
                            MblBtn.innerText = (`Rs. ${Mobile[p].packages[i].price}/-`);
                            packagesDiv.appendChild(MblBtn);
                            MblBtn.classList.add('priceBtn');
                            MblBtn.addEventListener('click', function () {
                                alert("card number "+i+" selected");
                            });
                        }
                    }
                }
                for (let p = 0; p < 7; p++){
                    if (packageType === HBB[p].name) {
                         for (let i = 0; i < HBB[p].packages.length; i++) {
                            const HbbBtn = document.createElement('button');
                            HbbBtn.innerText = (`Rs. ${HBB[p].packages[i].price}/-`);
                            packagesDiv.appendChild(HbbBtn);
                            HbbBtn.classList.add('priceBtn');
                            HbbBtn.addEventListener('click', function () {
                                alert("card number "+i+" selected");
                            });
                        }
                    }
                }
                for (let p = 0; p < 1; p++){
                    if (packageType === "DTV") {
                         for (let i = 0; i < DTV[p].packages.length; i++) {
                            const DtvBtn = document.createElement('button');
                            DtvBtn.innerText = (`Rs. ${DTV[p].packages[i].price}/-`);
                            packagesDiv.appendChild(DtvBtn);
                            DtvBtn.classList.add('priceBtn');
                            DtvBtn.addEventListener('click', function () {
                                alert("card number "+i+" selected");
                            });
                        }
                    }
                }
                
            })
});