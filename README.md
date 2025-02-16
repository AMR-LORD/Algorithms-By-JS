# **Complete Intro to Computer Science**

# [[Big O Questions]]

# [[Sorting Algorithms]]


## **Quick Sort**

### **1. Overview of Quick Sort**

- **Definition**: Quick Sort is a divide-and-conquer algorithm that recursively partitions an array into smaller subarrays based on a chosen "pivot" element.
- **Purpose**: Quick Sort is often used in practice due to its efficiency and simplicity, especially for large datasets. It is commonly implemented in programming languages like JavaScript (though `.sort()` may use Merge Sort in some cases).

---

## **2. How Quick Sort Works**

- **Process**:
    1. Choose a pivot element from the array (commonly the last element).
    2. Partition the array into two subarrays:
        - Elements less than the pivot go into the "left" subarray.
        - Elements greater than the pivot go into the "right" subarray.
    3. Recursively apply the same process to the left and right subarrays.
    4. Combine the sorted subarrays with the pivot to produce the final sorted array.
- **Example**: Given the array `[4, 9, 3, 5]`:
    - Choose `5` as the pivot.
    - Partition the array into `[4, 3]` (left) and `[9]` (right).
    - Recursively sort `[4, 3]`:
        - Choose `3` as the pivot.
        - Partition into `[]` (left) and `[4]` (right).
        - Combine to get `[3, 4]`.
    - Combine the results: `[3, 4, 5, 9]`.

---

## **3. Time Complexity**

- **Average Case**: \(O(n \log n)\)
    - Quick Sort achieves this by dividing the array into roughly equal halves at each step.
- **Best Case**: \(O(n \log n)\)
    - Occurs when the pivot consistently divides the array into two equal parts.
- **Worst Case**: \(O(n^2)\)
    - Occurs when the pivot is consistently the smallest or largest element, leading to highly unbalanced partitions (e.g., already sorted or reverse-sorted arrays).

---

## **4. Space Complexity**

- **Non-Destructive Version**: \(O(n)\)
    - This version creates new arrays for the left and right partitions, increasing memory usage.
- **Destructive Version**: \(O(\log n)\)
    - By performing the partitioning in place, Quick Sort can reduce space complexity to logarithmic due to the recursion stack.

---

## **5. Stability**

- **Stable Sort**: No (by default)
    - Quick Sort does not guarantee that equal elements will retain their original order unless specifically implemented to do so.
- **Modification for Stability**: It is possible to make Quick Sort stable, but this often comes at the cost of increased complexity or reduced performance.

---

## **6. Destructiveness**

- **Destructive Algorithm**: Yes (if implemented in place)
    - Quick Sort modifies the original array during the partitioning process.
    - If preserving the original array is necessary, a copy must be made before applying Quick Sort.

---

## **7. Practical Considerations**

- **Why Use Quick Sort?**
    - Quick Sort is generally faster in practice than other \(O(n \log n)\) algorithms like Merge Sort due to better cache performance and lower constant factors.
    - It is widely used in standard libraries and real-world applications.
- **Real-World Applications**:
    - Sorting large datasets where performance is critical.
    - Hybrid algorithms: Quick Sort is sometimes combined with Insertion Sort for small subarrays to improve efficiency.

---

## **8. Comparison with Other Sorting Algorithms**

- **Bubble Sort**:
    - Bubble Sort has a time complexity of \(O(n^2)\) and is inefficient for large datasets.
    - Quick Sort outperforms Bubble Sort in almost all scenarios.
- **Insertion Sort**:
    - Insertion Sort performs well on small or nearly sorted datasets (\(O(n)\) in the best case).
    - Quick Sort is more efficient for larger datasets, especially when the data is shuffled.
- **Merge Sort**:
    - Both Quick Sort and Merge Sort have an average time complexity of \(O(n \log n)\).
    - Merge Sort is stable and uses \(O(n)\) additional space, while Quick Sort is unstable and uses \(O(\log n)\) space if implemented in place.

---

## **9. Key Features of Quick Sort**

- **Divide and Conquer**:
    - Quick Sort breaks down the problem into smaller subproblems, making it easier to manage.
- **Pivot Selection**:
    - The choice of pivot significantly affects performance. Strategies like "median-of-three" can mitigate worst-case scenarios.
- **In-Place Implementation**:
    - Quick Sort can be implemented without creating additional arrays, reducing memory usage.

---

## **10. Example Walkthrough**

Let’s revisit the example from the lesson: `[4, 9, 3, 5]`.

### **Step-by-Step Process**:

1. Choose `5` as the pivot.
2. Partition the array:
    - Left subarray: `[4, 3]` (elements < 5).
    - Right subarray: `[9]` (elements > 5).
3. Recursively sort `[4, 3]`:
    - Choose `3` as the pivot.
    - Partition into `[]` (left) and `[4]` (right).
    - Combine to get `[3, 4]`.
4. Combine the results:
    - `[3, 4] + [5] + [9] = [3, 4, 5, 9]`.

---

## **11. Variations of Quick Sort**

- **Quick Sort 3**:
    - Chooses the pivot as the median of three elements (first, middle, and last) to improve balance and reduce the likelihood of worst-case performance.
- **Hybrid Algorithms**:
    - Combines Quick Sort with other algorithms (e.g., Insertion Sort for small subarrays) to optimize performance.

---

## **12. Key Takeaways**

- Quick Sort is a powerful and efficient sorting algorithm, particularly for large datasets.
- Its performance depends heavily on pivot selection and partitioning strategy.
- While it is not stable by default, it can be modified to achieve stability at the cost of additional complexity.
- Understanding Quick Sort helps grasp the principles of divide-and-conquer algorithms and recursion.

If you have any specific questions or need further clarification on any part of the lesson, feel free to ask!

---

## Radix Sort

### **1. Overview of Radix Sort**

- **Definition**: Radix Sort is a non-comparison-based sorting algorithm that sorts numbers by processing their digits (or "places") one at a time.
- **Purpose**: Radix Sort is particularly useful for sorting integers or strings where the keys are composed of multiple components (e.g., digits, characters). It avoids direct comparisons between elements, making it efficient for certain types of data.

---

### **2. How Radix Sort Works**

- **Process**:
    
    1. Start with the least significant digit (rightmost digit) and sort the numbers based on that digit.
    2. Move to the next significant digit and repeat the sorting process.
    3. Continue this process until all digits (from least to most significant) have been processed.
    4. Use "buckets" (arrays) to group numbers based on their current digit value during each pass.
- **Example**: Given the array `[109, 224, 901, 58]`:
    
    - **First Pass** (Sort by ones place): `[901, 224, 58, 109]`
    - **Second Pass** (Sort by tens place): `[901, 109, 224, 58]`
    - **Third Pass** (Sort by hundreds place): `[58, 109, 224, 901]`
    
    After sorting by the most significant digit, the array is fully sorted.
    

---

### **3. Time Complexity**

- **Average Case**: \(O(n \cdot k)\)
    - Where \(n\) is the number of elements in the array and \(k\) is the number of digits in the largest number.
    - This complexity arises because Radix Sort processes each digit of every number once.
- **Best Case**: \(O(n \cdot k)\)
    - The best case matches the average case since Radix Sort always processes all digits regardless of the initial order.
- **Worst Case**: \(O(n \cdot k)\)
    - The worst case also matches the average case.

---

### **4. Space Complexity**

- **Space Complexity**: \(O(n + k)\)
    - Radix Sort requires additional space for the buckets used during sorting.
    - \(n\) is the number of elements, and \(k\) is the range of possible digit values (e.g., 10 for base-10 numbers).

---

### **5. Stability**

- **Stable Sort**: Yes
    - Radix Sort preserves the relative order of equal elements because it uses stable sub-sorting methods (e.g., counting sort for bucketing).

---

### **6. Destructiveness**

- **Non-Destructive Version**: Commonly implemented using auxiliary arrays for bucketing.
- **Destructive Version**: Possible but less common due to the need for temporary storage during bucketing.

---

### **7. Practical Considerations**

- **Why Use Radix Sort?**
    - Radix Sort is highly efficient for large datasets with a small range of digit values (e.g., sorting integers or fixed-length strings).
    - It avoids the overhead of direct comparisons, making it faster than comparison-based algorithms in specific scenarios.
- **Real-World Applications**:
    - Sorting integers, IP addresses, or strings with fixed-length keys.
    - Used in databases and file systems for sorting large datasets with predictable patterns.

---

### **8. Comparison with Other Sorting Algorithms**

- **Comparison-Based Algorithms** (e.g., Quick Sort, Merge Sort):
    - These algorithms rely on direct comparisons between elements, leading to a lower bound of \(O(n \log n)\) for their time complexity.
    - Radix Sort breaks this lower bound by avoiding comparisons, achieving \(O(n \cdot k)\) complexity.
- **Bubble Sort / Insertion Sort**:
    - These algorithms are inefficient (\(O(n^2)\)) and not suitable for large datasets.
    - Radix Sort outperforms them in terms of both time and space efficiency for specific use cases.

---

### **9. Key Features of Radix Sort**

- **Non-Comparison-Based**:
    - Radix Sort does not compare elements directly; instead, it groups them based on their digit values.
- **Bucketing**:
    - Uses buckets (arrays) to organize elements by their current digit value during each pass.
- **Digit-by-Digit Processing**:
    - Processes digits from least to most significant, ensuring stability and correctness.

---

### **10. Example Walkthrough**

Let’s revisit the example from the lesson: `[109, 224, 901, 58]`.

**Step-by-Step Process**:

1. **First Pass** (Sort by ones place):
    - Group numbers into buckets based on their ones digit:
        - Bucket 1: `109`
        - Bucket 4: `224`
        - Bucket 8: `58`
        - Bucket 1: `901`
    - Combine buckets: `[901, 224, 58, 109]`.
2. **Second Pass** (Sort by tens place):
    - Group numbers into buckets based on their tens digit:
        - Bucket 0: `901`
        - Bucket 0: `109`
        - Bucket 2: `224`
        - Bucket 5: `58`
    - Combine buckets: `[901, 109, 224, 58]`.
3. **Third Pass** (Sort by hundreds place):
    - Group numbers into buckets based on their hundreds digit:
        - Bucket 0: `58`
        - Bucket 1: `109`
        - Bucket 2: `224`
        - Bucket 9: `901`
    - Combine buckets: `[58, 109, 224, 901]`.

The array is now fully sorted.

---

### **11. Variations of Radix Sort**

- **Least Significant Digit (LSD) Radix Sort**:
    - Starts sorting from the least significant digit and moves toward the most significant digit.
- **Most Significant Digit (MSD) Radix Sort**:
    - Starts sorting from the most significant digit and recursively applies the same process to subgroups.

---

### **12. Limitations of Radix Sort**

- **Data Type Dependency**:
    - Radix Sort works best with integers or strings with fixed-length keys. It is less effective for floating-point numbers or variable-length strings.
- **Space Overhead**:
    - Requires additional memory for buckets, which can be a limitation for very large datasets.
- **Performance Sensitivity**:
    - Performance depends on the distribution of digit values. For datasets with many long numbers, Radix Sort may not be as efficient as comparison-based algorithms.

---

### **13. Key Takeaways**

- Radix Sort is a powerful non-comparison-based sorting algorithm that processes digits sequentially.
- It achieves linear time complexity (\(O(n \cdot k)\)) for specific types of data, making it faster than comparison-based algorithms in those cases.
- While it has limitations (e.g., space overhead and data type dependency), Radix Sort is highly effective for sorting integers or fixed-length strings.

If you have any specific questions or need further clarification on any part of the lesson, feel free to ask!

---

### Explanation in AR

طبعًا! خلينا نشرح **Radix Sort** بطريقة منظمة وسهلة الفهم.

---

## 📌 **فكرة Radix Sort**

هو **خوارزمية فرز غير مقارنة (Non-Comparison Sorting Algorithm)**، بمعنى إنه لا يعتمد على المقارنة بين العناصر مثل **Merge Sort** أو **Quick Sort**. بل يعتمد على توزيع الأعداد في **مجموعات (Buckets)** بناءً على **القيم الرقمية (الأرقام من 0 لـ 9)** في كل خانة (Digit) من العدد، ويتم تكرار هذه العملية لكل خانة بدءًا من الأصغر إلى الأكبر.

---

## 🛠️ **كيف يعمل؟**

### الفكرة الأساسية

1. نبدأ من **أصغر خانة** (أقل مرتبة، مثل الآحاد) ونقوم بتوزيع الأعداد في **10 صناديق (Buckets)** بناءً على الرقم في هذه الخانة.
2. بعد توزيع الأعداد، نقوم **بإعادة تجميعها بنفس الترتيب** الذي تم وضعها به في الصناديق.
3. نكرر العملية للخانة التالية (العشرات، ثم المئات، ثم الآلاف...) حتى ننتهي من أكبر خانة في أكبر عدد.
4. بعد المرور على كل الخانات، تكون الأعداد مرتبة تمامًا.

---

## ✏️ **مثال عملي**

### **لنرتب الأعداد التالية باستخدام Radix Sort:**

```
[170, 45, 75, 90, 802, 24, 2, 66]

```

### **الخطوات:**

### 1️⃣ الترتيب حسب خانة الآحاد:

ننظر إلى الرقم الأخير في كل عدد:

- `170 (0)`
- `45 (5)`
- `75 (5)`
- `90 (0)`
- `802 (2)`
- `24 (4)`
- `2 (2)`
- `66 (6)`

🔹 الآن نوزع الأعداد في 10 صناديق (من 0 إلى 9):

```
0 → [170, 90]
2 → [802, 2]
4 → [24]
5 → [45, 75]
6 → [66]

```

نرتبها بإعادة تجميعها:

`[170, 90, 802, 2, 24, 45, 75, 66]`

---

### 2️⃣ الترتيب حسب خانة العشرات:

ننظر إلى الرقم الثاني من اليمين:

- `170 (7)`
- `90 (9)`
- `802 (0)`
- `2 (0)`
- `24 (2)`
- `45 (4)`
- `75 (7)`
- `66 (6)`

🔹 التوزيع في الصناديق:

```
0 → [802, 2]
2 → [24]
4 → [45]
6 → [66]
7 → [170, 75]
9 → [90]

```

📌 نرتبها بإعادة تجميعها:

`[802, 2, 24, 45, 66, 170, 75, 90]`

---

### 3️⃣ الترتيب حسب خانة المئات:

ننظر إلى الرقم الثالث من اليمين:

- `802 (8)`
- `2 (0)`
- `24 (0)`
- `45 (0)`
- `66 (0)`
- `170 (1)`
- `75 (0)`
- `90 (0)`

🔹 التوزيع في الصناديق:

```
0 → [2, 24, 45, 66, 75, 90]
1 → [170]
8 → [802]

```

📌 نرتبها بإعادة تجميعها:

`[2, 24, 45, 66, 75, 90, 170, 802]`

✅ **بعد آخر تكرار، تكون الأعداد مرتبة تمامًا!**

---

## 🔥 **تحليل الزمن (Time Complexity)**

- **أسوأ حالة (Worst Case):** حيث:
    
    O(n⋅k)O(n \cdot k)
    
    - nn هو عدد العناصر.
    - kk هو عدد الخانات في أكبر عدد.
- **أفضل حالة (Best Case):** .
    
    O(n⋅k)O(n \cdot k)
    
- **متوسط الأداء (Average Case):** .
    
    O(n⋅k)O(n \cdot k)
    

🔹 **ملحوظة:**

في الحالات التي يكون فيها **k صغيرًا بالنسبة لـ n**، يكون الأداء قريبًا جدًا من O(n)O(n)، وهذا يجعله أسرع من الخوارزميات التقليدية مثل **Merge Sort** و **Quick Sort** في بعض السيناريوهات.

---

## 🔥 **متى نستخدم Radix Sort؟**

✅ **يفضل استخدامه عندما:**

- تكون القيم عبارة عن **أعداد صحيحة أو Strings قصيرة**.
- عدد الخانات (Digits) صغير مقارنة بعدد العناصر.
- نحتاج إلى **فرز مستقر (Stable Sorting)**.

❌ **لا يفضل استخدامه عندما:**

- الأعداد تحتوي على **قيم عشرية** (لأن العملية تصبح معقدة).
- عدد الخانات كبير جدًا، مما يجعله غير فعال مقارنة بالخوارزميات المقارنة مثل **Merge Sort**.

---

## 🔹 **كود Radix Sort بلغة C#**

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void RadixSort(int[] arr)
    {
        int max = GetMax(arr);
        for (int place = 1; max / place > 0; place *= 10)
        {
            CountingSort(arr, place);
        }
    }

    static int GetMax(int[] arr)
    {
        int max = arr[0];
        foreach (int num in arr)
        {
            if (num > max)
                max = num;
        }
        return max;
    }

    static void CountingSort(int[] arr, int place)
    {
        int n = arr.Length;
        int[] output = new int[n];
        int[] count = new int[10];

        // حساب التكرارات
        for (int i = 0; i < n; i++)
        {
            int index = (arr[i] / place) % 10;
            count[index]++;
        }

        // حساب المواقع الفعلية
        for (int i = 1; i < 10; i++)
        {
            count[i] += count[i - 1];
        }

        // بناء المصفوفة المرتبة
        for (int i = n - 1; i >= 0; i--)
        {
            int index = (arr[i] / place) % 10;
            output[count[index] - 1] = arr[i];
            count[index]--;
        }

        // نسخ القيم إلى المصفوفة الأصلية
        for (int i = 0; i < n; i++)
        {
            arr[i] = output[i];
        }
    }

    static void Main()
    {
        int[] arr = { 170, 45, 75, 90, 802, 24, 2, 66 };
        RadixSort(arr);
        Console.WriteLine(string.Join(", ", arr));
    }
}

```

---

## 🎯 **الخلاصة**

- **Radix Sort** يعتمد على **التوزيع (Bucketing) بدل المقارنة**.
- **يعمل بكفاءة عالية** عند التعامل مع الأعداد ذات القيم الصحيحة أو السلاسل القصيرة.
- **أداءه O(n⋅k)O(n \cdot k)**، مما يجعله أسرع من بعض الخوارزميات المقارنة في بعض الحالات.
- **يُعتبر خوارزمية فرز مستقرة (Stable Sort)**.

---

هل عندك أي استفسارات؟ 😊🔥

---

ليه منرتبش حسب خانة المئات في اول مره علطول بدل ما نعمل كل الخطوات دي ؟

### قال ChatGPT:

السبب في إننا نبدأ بترتيب الأرقام حسب **أصغر خانة** (مثل الآحاد) أولًا في خوارزمية **Radix Sort** هو أن الطريقة اللي بنشتغل بيها بتعتمد على **الترتيب المتدرج** بناءً على قيمة كل خانة على حدة. يعني لو بدأنا من خانة المئات مباشرة، مش هنقدر نستفيد من الخانات الصغيرة زي الآحاد والعشرات في ترتيب الأرقام بشكل صحيح.

خليني أشرح لك السبب بشكل أبسط:

### **الفكرة الأساسية:**

- كل عدد في النظام العددي بيتم تمثيله كـ **سلسلة من الخانات**، زي:
    - الرقم 802: (8 في خانة المئات، 0 في خانة العشرات، 2 في خانة الآحاد).
    - الرقم 45: (0 في خانة المئات، 4 في خانة العشرات، 5 في خانة الآحاد).

في **Radix Sort**، لما نبدأ من **أصغر خانة**، بنستفيد من ترتيب الأرقام بناءً على القيم الصغيرة في البداية، وبعدين نستخدمها كمرجع لترتيب الأرقام بناءً على الخانات الأكبر (العشرات، المئات، وهكذا).

### **ليه مش نبدأ من خانة المئات؟**

لو بدأنا من خانة المئات مباشرة:

- هنبقى بنحاول نقارن الأعداد حسب خانة المئات بدون الأخذ في الاعتبار القيم الصغيرة (الآحاد والعشرات).
- يعني لو فيه عددين زي 802 و45:
    - خانة المئات في 802 هي 8 وفي 45 هي 0.
    - لو بدأنا من هنا، ممكن نخطئ في ترتيب الأعداد بشكل عام لأننا مش أخدنا في الاعتبار ترتيب الآحاد والعشرات في باقي الأرقام.

لكن لما نبدأ من **الآحاد**:

- بنوزع الأعداد بناءً على القيم في خانة الآحاد.
- بعد كده ننتقل إلى خانة العشرات، اللي بتبني على الترتيب اللي حصل في الآحاد.
- وبعدين خانة المئات تبني على الترتيب اللي حصل في العشرات، وهكذا.

### **فائدة التدرج:**

بداية من **الخانات الأصغر** بتخلي **التجمع (buckets)** اللي بنقوم بترتيب الأرقام فيها يكون أكثر دقة، عشان الخانات الكبيرة بتعتمد على الخانات الصغيرة في الترتيب النهائي.

---

### **توضيح بسيط بالصور:**

1. لو عندنا الأعداد: `170, 45, 75, 90, 802, 24, 2, 66`
    
    - أول خطوة: بنوزعهم حسب **الآحاد**، يبقى التوزيع هيكون:
        
        ```
        css
        نسختحرير
        0 → [170, 90]
        2 → [802, 2]
        4 → [24]
        5 → [45, 75]
        6 → [66]
        
        ```
        
2. بعد كده نوزعهم حسب **العشرات**:
    
    - هيبقى التوزيع بناءً على العشرات:
        
        ```
        css
        نسختحرير
        0 → [802, 2]
        2 → [24]
        4 → [45]
        6 → [66]
        7 → [170, 75]
        9 → [90]
        
        ```
        
3. وبعدين نوزعهم حسب **المئات**:
    
    - التوزيع النهائي هيكون بناءً على المئات:
        
        ```
        css
        نسختحرير
        0 → [2, 24, 45, 66, 75, 90]
        1 → [170]
        8 → [802]
        
        ```
        

---

### **الخلاصة:**

بداية ترتيب الأعداد من الخانة الصغيرة (الآحاد) لحد الخانة الكبيرة (المئات) هي الطريقة اللي بتضمن إننا بنرتب الأعداد بشكل صحيح بناءً على ترتيب كل خانة على حدة. لو بدأنا من المئات مباشرة، هنخسر الدقة في ترتيب الأرقام.

هل ده وضح ليك السبب؟ 😊

### أنت قلت:

في خانة المئات اول واحده جواها ارقام كتيره هتكتبهم ازاي ؟ ثواني انت تقصد انك هتاخد علي الترتيب الاخير مثلا و كل ما تلاقي باكت معينه جواها كذا رقم هتفتحها و هتنتقل للترتيب الاقل عشان تعرف الترتيب جوا الباكت ده ماشي ازاي او بشكل ادق كده كده الارقام جواه الباكت مترتبه لأنك رتبتهم في الترتيب الي قبله صح ؟

### قال ChatGPT:

الملاحظات التي تقدمها الآن هي لإصدار جديد من ChatGPT.

أي إجابة تفضل؟ قد يستغرق تحميل الإجابات بضع لحظات.

ChatGPT

إجابة رقم 1

تمام! إنت فهمت الفكرة بشكل صحيح.

خليني أوضح لك أكثر:

### **إزاي نتعامل مع الأرقام في خانة المئات، لو في أكتر من رقم بنفس القيمة في الخانات السابقة؟**

1. في **Radix Sort**، لما نوصل لمرحلة ترتيب الأرقام بناءً على خانة المئات (مثلاً)، الأرقام تكون **موزعة بالفعل في ترتيب مناسب بناءً على الخانات السابقة (الآحاد والعشرات)**.
2. لما نكون في مرحلة ترتيب المئات، نعمل على ترتيب الأرقام حسب **القيمة في خانة المئات**، بس الأرقام اللي بتدخل نفس الباكت (مثلًا اللي ليهم نفس الرقم في خانة المئات) هتكون **مترتبة بالفعل** لأننا سبق ورتبناهم في الخانات اللي قبل كده.

---

### **الفكرة**:

- لما نوزع الأرقام في **Bucketing**، كل رقم بيكون ليه مكان معين في الباكتات (حسب قيم الخانات اللي بنوزع عليها).
- عند ترتيب الأرقام بناءً على خانة معينة (مثلاً خانة المئات)، **نفتح كل باكت** وننظر للترتيب اللي جواها بناءً على القيم في الخانات اللي قبليها (مثلاً الآحاد والعشرات).

وبكده:

- لو الباكت فيه أكتر من رقم، الأرقام جوا الباكت هتكون **مرتبة أصلاً** بناءً على الترتيب السابق (في الآحاد أو العشرات)، وبس هنرتبهم حسب القيمة في الخانة الجديدة (مثلاً المئات).

### **مثال عملي**:

1. الأعداد الأولية:
    
    ```
    csharp
    نسختحرير
    [170, 45, 75, 90, 802, 24, 2, 66]
    
    ```
    
2. بعد توزيع الأرقام حسب **الخانة الأولى (الآحاد)**:
    
    ```
    css
    نسختحرير
    0 → [170, 90]
    2 → [802, 2]
    4 → [24]
    5 → [45, 75]
    6 → [66]
    
    ```
    
    (الأرقام جوا كل باكت هنا مترتبة أصلاً حسب الآحاد).
    
3. بعد توزيع الأرقام حسب **الخانة الثانية (العشرات)**:
    
    ```
    css
    نسختحرير
    0 → [802, 2]
    2 → [24]
    4 → [45]
    6 → [66]
    7 → [170, 75]
    9 → [90]
    
    ```
    
    (هنا أيضًا، الأرقام جوا كل باكت مترتبة بالفعل حسب العشرات، والـ 170 و 75 مترتبة بالفعل بناءً على الآحاد).
    
4. بعد ترتيب الأرقام بناءً على **الخانة الثالثة (المئات)**:
    
    ```
    css
    نسختحرير
    0 → [2, 24, 45, 66, 75, 90]
    1 → [170]
    8 → [802]
    
    ```
    

### **إزاي بنحافظ على الترتيب؟**

- كل باكت بنحط فيه الأرقام حسب القيمة في الخانة الحالية (المئات، العشرات، الآحاد).
- **التوزيع داخل كل باكت** يعتمد على الترتيب اللي حصل في الخانات السابقة.
- لو فيه أكتر من رقم داخل نفس الباكت، فالأرقام دي بتكون **مترتبة** بناءً على الخانات السابقة.

### **في النهاية**:

- زي ما إنت قلته، لما نوزع الأرقام حسب الخانات الكبيرة (زي المئات)، الأرقام جوا الباكتات هتكون **مرتبة** أصلاً من التوزيع السابق، فهنقدر نتابع ترتيب الأرقام بشكل صحيح بدون ما نحتاج نرتبهم تاني.

هل ده وضح ليك الفكرة أكتر؟ 😊
