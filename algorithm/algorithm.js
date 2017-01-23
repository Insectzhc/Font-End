/**
 * @author      Insect
 * @description javascript常用算法
 */

//冒泡排序
function bubbleSort(arr){
	var len = arr.length, temp, i = 0, j;
	for(; i < len; i++){
		for(j = 0; j < len - i; j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

//选择排序
function selectionSort(arr){
	var i = 0, j, len = arr.length, temp, minIndex;
	for(; i < len-1; i++){
		minIndex = i;
		for(j = i+1; j < len; j++){
			if(arr[minIndex] > arr[j]){
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

//插入排序
//function insertionSort(arr){
//	var i = 0, j, temp;
//	for(;;){
//		for(;;){
//			
//		}
//	}
//	return arr;
//}
