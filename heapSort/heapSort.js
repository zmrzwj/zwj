
//������
function heapSort(arr){
    //�ж�null��length
    if(arr == null || arr.length <= 1){
        return;
    }

    //��ʼ����
    buildHeap(arr);

    //һ��һ�����Ѷ�Ԫ�ط������Ȼ��ֻ����ǰarray.length-i��Ԫ�ء�
    for(var i=arr.length-1;i>=1;i--){
        swap(arr,0,i);
        maxHeap(arr,i,0)
    }

}


//������
function buildHeap(arr){
    //�ж�null��length
    if(arr == null || arr.length <= 1){
        return;
    }

    var half = arr.length/2;

    for(var i= half;i>=0;i--){
        maxHeap(arr,arr.length,i);
    }

    console.log("buildHeap:",arr);

}


//�����󶥶�
function maxHeap(arr,length,index){
    var left = index*2 + 1;//����
    var right = index*2 + 2;//?�Һ���

    var largest = index ;

    if(left<length&&arr[left] >= arr[largest]){
        largest = left;
    }

    if(right<length&&arr[right] >= arr[largest]){
        largest = right ;
    }

    if(largest != index){
        swap(arr,index,largest);
        maxHeap(arr,length,largest);
    }

}


function swap(arr,index,largest){
    var temp = arr[index] ;
    arr[index] = arr[largest];
    arr[largest] =temp;
}

var test = [1,2,3,111,2,334,67,12,23,111,2345,7,4,0,67,-5];
heapSort(test);
console.log(test);