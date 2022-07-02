/*
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

productArray([12,20])           => [20,12]
productArray([12,20])           => [20,12]
productArray([3,27,4,2])        => [216,24,162,324]
productArray([13,10,5,2,9])     => [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2])   => [2040,1920,8160,10880,6528,16320]
*/

//  ANSWER

function productArray(arr, n)
{

    // Base case
    if (n == 1) {
        //document.write(0);
        return;
    }

    // Initialize memory to all arrays
    let left = new Array(n);
    let right = new Array(n);
    let prod = new Array(n);

    let i, j;

    /* Left most element of left array
    is always 1 */
    left[0] = 1;

    /* Right most element of right
    array is always 1 */
    right[n - 1] = 1;

    /* Construct the left array */
    for (i = 1; i < n; i++)
        left[i] = arr[i - 1] * left[i - 1];

    /* Construct the right array */
    for (j = n - 2; j >= 0; j--)
        right[j] = arr[j + 1] * right[j + 1];

    /* Construct the product array using
    left[] and right[] */
    for (i = 0; i < n; i++)
        prod[i] = left[i] * right[i];

    /* print the constructed prod array */
    for (i = 0; i < n; i++)
        document.write(prod[i] + " ");

        console.log("productArray([50,20,40,10,30]) ==> " +prod);
        return;
    }
    
    // Driver code
    let arr = [ 50, 20, 40, 10, 30 ];
    let n = arr.length;

document.write("productArray([50,20,40,10,30]) ==> ");
productArray(arr, n);
    
