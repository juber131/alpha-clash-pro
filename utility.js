function hideElementById (elementid){
    const element = document.getElementById('elementid');
    element.classList.add('hidden');
}
function showElementById(elementid){
    const element= document.getElementById('elementid');
    element.classList.remove('hidden');
}