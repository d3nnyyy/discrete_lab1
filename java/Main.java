import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    //USING ARRAYLIST

    public static int[] ArrayListWithUniqueElements(int[] array){
        ArrayList<Integer> newList = new ArrayList<>();
        for (int element : array){
            if(!newList.contains(element)){
                newList.add(element);
            }
        }
        int[] newArray = new int[newList.size()];
        for(int i =0; i<newList.size(); i++){
            newArray[i] = newList.get(i);
        }
        return newArray;
    }

    //USING ARRAY

    public static int[] ArrayWithUniqueElements(int[] arr){
        int[] newArr = new int[arr.length];
        int index = 0;
        for(int i = 0; i < arr.length; i++){
            boolean isDuplicate = false;
            for (int j = 0; j < index; j++){
                if(arr[i] == newArr[j]){
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate){
                newArr[index] = arr[i];
                index++;
            }
        }
        return Arrays.copyOf(newArr, index);
    }

    public static int[][] cartesianProduct(int[]A, int[]B){
        int[][] newArr = new int[A.length*B.length][2];
        int index = 0;
        for (int i = 0; i < A.length; i++){
            for (int j = 0; j < B.length; j++){
                int[] pair = new int[] {A[i], B[j]};
                newArr[index] = pair;
                index++;
            }
        }
        return newArr;
    }

    public static void main(String[] args) {
        int[] myArray = {1,2,3,3,4,4,5};

//        int[] newArray = ArrayListWithUniqueElements(myArray);
//        System.out.println(Arrays.toString(newArray));

        myArray = ArrayWithUniqueElements(myArray);
        System.out.println(Arrays.toString(myArray));

        int[] A = {1,2};
        int[] B = {3,4};
        int[][] result = cartesianProduct(A,B);

        for (int[]pair : result){
            System.out.println("(" + pair[0] + ", " + pair[1] + ")");
        }
    }
}