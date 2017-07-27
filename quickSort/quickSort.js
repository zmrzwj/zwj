Array.prototype.quickSort = function(){

    quickSortHelper(this, 0, this.length-1);

    function quickSortHelper(arr,start,end){
        if(start<end){
            var part = partition(arr,start,end);

            quickSortHelper(arr,start,part-1);
            quickSortHelper(arr,part+1,end);
        }
    }

    function partition(arr,start,end){
        var pivot = arr[end];//哨兵
        var i = start ;

        for(var j= start;j <end;j++){
            if(arr[j]<pivot){
                swap(arr, i,j);
                i++;
            }
        }

        swap(arr,i,end);
        return i;
    }

    function swap(arr,i,j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }


};


var quickSort = function(arr) {
    if(arr.length <= 1) return arr;             // 递归停止条件
    // 选取基准值
    var pivotIndex = Math.ceil(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];   // 基准值
    var left = [], right = [];

    // 如果大于基准值，移到数组right中；小于基准的值，移到数组left中
    for(var i=0; i< arr.length; i++) {
        arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
    }

    return quickSort(left).concat([pivot], quickSort(right));

};

function quickSort3(arr,left,right){
    if(left<right){

        var key = arr[left];

        var low = left;
        var high = right;

        while(low<high){
            while(low<high&&arr[high]>=key){
                high--;
            }
            arr[low] = arr[high];
            while(low<high&&arr[low]<=key){
                low++;
            }
            arr[high] = arr[low];
        }

        arr[low] = key;

        console.log(arr);
        /*console.log(arr);
        console.log(left);
        console.log(low-1);
        console.log(low+1);
        console.log(right);*/

        quickSort3(arr,left,low-1);
        quickSort3(arr,low+1,right);

    }else{
        return 0;
    }

}


var arr = [500, 21, 32, 155, 43,789,234,890,21,36,8,123,901,51,77];
quickSort3(arr,0,arr.length-1);
//console.log("123:",arr);