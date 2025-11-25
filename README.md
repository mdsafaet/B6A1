Question-1

interface দিয়ে আমরা মুলত object এর structure তৈরি করি এবং type দিয়ে object ছাড়াও অনেক রকম structure তৈরি করতে পারি।
interface দিয়ে extends এর মাধ্যমে অন্য আরেকটি object সহজেই তৈরি করা যায় যা type এর মাধ্যমে intersection ব্যবহার করে করা যায়.
interface কে একাধিকবার declare করা যায় যা type এর ক্ষেত্রে করা যায় না ইত্যাদি।

Question-2

typescript এর keyof keyword এর কাজ হচ্ছে কোন type এর যতগুলো key আছে তার union type তৈরি করে দেয়া যাতে আমাদের ভুল key access করা থেকে রক্ষা করে যেমন ঃ
interface Person{ name: string; age:number; isDeveloper:boolean; }

type Workers = keyof Person

এখানে যদি আমরা person কে type হিসেবে বসাই keyof operator দিয়ে তাহলে আমাদের type হিসাবে name,age এবং isDeveloper suggest করবে এতে object তৈরি করতে ভুল হবার সম্ভাবনা হয়না।
