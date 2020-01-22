var featureSubmitBtn=document.getElementById("featureSubmitBtn");
var featureFrm=document.getElementById("featureFrm");
var featureLoadingDiv=document.getElementById("featureLoadingDiv")

featureSubmitBtn.addEventListener("click", function(){

    // Make the loader div visible
    featureLoadingDiv.classList.remove("human-removed")
    // Hide the form from the user
    featureFrm.classList.add("human-removed")
});