class heap{

    public static void main(String[] args) {
        int[] array = { 19, 28, 7, 6, 5, 4, 3, 72, 1, 0, -14, -21, -3 };

        System.out.println("Before heap:");
        ArrayUtils.printArray(array);

        heapSort(array);

        System.out.println("After heap sort:");
        ArrayUtils.printArray(array);
    }

    //堆排序
    public static void heapSort(int[] array) {
        if (array == null || array.length <= 1) {
            return;
        }

        buildMaxHeap(array);

        //一个一个将堆顶元素放在最后，然后只调整前array.length-i个元素。
        for (int i = array.length - 1; i >= 1; i--) {
            System.out.print("开始排序了--------:"+i+"\n");
            ArrayUtils.exchangeElements(array, 0, i);
            maxHeap(array, i, 0);
        }
    }

    //初始化堆
    private static void buildMaxHeap(int[] array) {
        //判断数组为null或length<=1
        if (array == null || array.length <= 1) {
            return;
        }
        int half = array.length / 2;
        for (int i = half; i >= 0; i--) {
            maxHeap(array, array.length, i);
        }
    }

    //调整堆，大顶堆
    private static void maxHeap(int[] array, int heapSize, int index) {
        int left = index * 2 + 1;
        int right = index * 2 + 2;

        ArrayUtils.printArray(array);

        int largest = index;
        //分别与左右孩子比，如果比左右孩子小就交换
        if (left < heapSize && array[left] > array[index]) {
            largest = left;
        }

        if (right < heapSize && array[right] > array[largest]) {
            largest = right;
        }

        if (index != largest) {
            ArrayUtils.exchangeElements(array, index, largest);
            System.out.print("交换---------------------:"+"\n");
            maxHeap(array, heapSize, largest);
        }
    }

}