/* 
* @Author: anchen
* @Date:   2016-11-25 15:22:48
* @Last Modified by:   anchen
* @Last Modified time: 2016-11-25 15:46:25
*/

window.onload = function(){
    var input = document.getElementById('file');

    input.onchange = function(){
        console.log('change');
        var reader = new FileReader(),
            files = input.files;
        console.log(files);
        reader.onload = function(e){
            console.log(e.target.result);
        }
    }
    
}