//1. There are 3 days' worth of data points here:
//   Today: 
//       You will leave today empty so users can insert any new data.
//   Yesterday and the day before: 
//       They are read only data given to you so your webapp can demonstrate the ability to cycle through history.
//
//2. Be aware that common food doen't have "nix_item_id", only branded food has it.
//  Common data requires a initial call to get a list and further details requires an extra call.
//  In order to get the details, depending on the food is branded or not, the API endpoints are different.
//  You will gather these different fileds from Nutritionix API to contruct our data points.
//
//3. Understanding the food calorie calculation
//  Take "chicken salad" for example:
//      "serving_qty": 0.5,
//      "serving_unit": "cup",
//      "serving_weight_grams": 112.1,
//      "nf_calories": 253.99,
//      "serving_size" : 1,
//  That translates into:
//      Two serves of Chicken Salad 0.5 cup, which is 1 cup. Rounding to integer is 224 grams and 508 calories.

export const MOCK_DATA = {
   first_name: 'Jane',
   last_name: 'Appleseed',
   height_cm: 163,
   weight_kg: 57,
   daily_goal: 1500,
   data_points: [
       {
           //today's date
           date: '', 
           //empty, let user do the input
           intake_list: [] 
       },
       {
           //yesterday's date
           date: '', 
           intake_list: [
               {
                   //branded food has nix_item_id, common food doesn't
                   "nix_item_id": "55c9298af0432259369100c4", 
                   "food_name": "Italian sausage",
                   "serving_unit": "link",
                   //weight of "serving_qty"
                   "serving_weight_grams": 75, 
                   //per unit of "nf_calories", see how Nutritionix website demo works
                   "serving_qty": 1, 
                   //that is per "serving_qty", see how Nutritionix website demo works
                   "nf_calories": 258, 
                   //that is how much user ate
                   "serving_size" : 2, 
                   "meal_type": "breakfast",
                   "thumb": "https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"
               },
               {
                   "food_name": "salmon salad",
                   "serving_unit": "cup",
                   "serving_weight_grams": 407.01,
                   "serving_qty": 1,
                   "nf_calories": 389.27,
                   "serving_size" : 1.5, 
                   "meal_type": "lunch",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
               },
               {
                   "food_name": "boneless skinless chicken breasts",
                   "serving_qty": 1,
                   "serving_unit": "breast",
                   "serving_weight_grams": 120,
                   "nf_calories": 198,
                   "serving_size" : 2,
                   "meal_type": "dinner",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"

               },
               {
                   "food_name": "slice cheese",
                   "serving_qty": 1,
                   "serving_unit": "slice",
                   "serving_weight_grams": 28,
                   "nf_calories": 113.12,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
               },
               {
                   "food_name": "orange",
                   "serving_qty": 1,
                   "serving_unit": "fruit (2-7/8\" dia)",
                   "serving_weight_grams": 140,
                   "nf_calories": 68.6,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
               },
           ]
       },
       {
           //2 days ago
           date: '', 
           intake_list: [
               {
                   "food_name": "fried eggs",
                   "serving_qty": 1,
                   "serving_unit": "large",
                   "serving_weight_grams": 46,
                   "nf_calories": 90.16,
                   "serving_size" : 2,
                   "meal_type": "breakfast",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"
               },
               {
                   "food_name": "chicken salad",
                   "serving_qty": 0.5,
                   "serving_unit": "cup",
                   "serving_weight_grams": 112.1,
                   "nf_calories": 253.99,
                   "serving_size" : 1,
                   "meal_type": "lunch",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
               },
               {
                   "nix_item_id": "598c0695306b814040ff908b",
                   "food_name": "Boneless Skinless Chicken Breasts",
                   "serving_unit": "oz",
                   "serving_qty": 4,
                   "nf_calories": 110,
                   "serving_size" : 1,
                   "meal_type": "dinner",
                   "thumb": "https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"

               },
               {
                   "food_name": "slice cheese",
                   "serving_qty": 1,
                   "serving_unit": "slice",
                   "serving_weight_grams": 28,
                   "nf_calories": 113.12,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"
               },
               {
                   "food_name": "orange",
                   "serving_qty": 1,
                   "serving_unit": "fruit (2-7/8\" dia)",
                   "serving_weight_grams": 140,
                   "nf_calories": 68.6,
                   "serving_size" : 2,
                   "meal_type": "snack",
                   "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"
               }
           ]
       }
   ]
}