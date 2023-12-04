function copyCode(codeId){
    var copyText=document.getElementById(codeId);

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
}