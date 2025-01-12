import { BarChart3, Calendar, Dumbbell, Utensils, Zap, Clock, Flame, ArrowDownCircle, ArrowUpCircle, Droplet, Moon, Thermometer, LineChart, Scale, Ruler, Camera, ClipboardList, GiftIcon as Massage } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FitnessCalendar } from '@/components/FitnessCalendar'

export default function TahaFitnessPlan() {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Taha's 12-Week Fitness Plan</h1>
      
      {/* Fitness Calendar */}
      <FitnessCalendar />
      
      {/* Overview Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-500" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <ArrowDownCircle className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold">Body Fat Reduction</p>
              <p className="text-sm text-gray-600">Focus on portion control and balanced nutrition</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <ArrowUpCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Muscle Growth / Retention</p>
              <p className="text-sm text-gray-600">Emphasis on protein intake and recovery</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Dumbbell className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="font-semibold">Balanced Training</p>
              <p className="text-sm text-gray-600">Mix of weightlifting, classes, and swimming</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="font-semibold">Recovery Focus</p>
              <p className="text-sm text-gray-600">Daily sauna/jacuzzi, weekly massage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Training Split */}
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Calendar className="w-6 h-6 text-indigo-500" />
      Weekly Training Split
    </CardTitle>
    <CardDescription>Detailed workout plan mixing weightlifting and classes</CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    <div>
      <h3 className="font-semibold mb-2">Monday: Upper-Body Strength + Optional Class</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Morning/Afternoon (GoodLife) – Upper-Body Weights (60–75 min)</p>
          <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
            <li>Bench Press: 4 sets × 6–8 reps</li>
            <li>Bent-Over Barbell Row: 4 sets × 6–8 reps</li>
            <li>Shoulder Press: 3 sets × 8–10 reps</li>
            <li>Lat Pull-Down: 3 sets × 8–10 reps</li>
            <li>Dumbbell Biceps Curls: 3 sets × 10–12 reps</li>
            <li>Triceps Cable Pushdowns: 3 sets × 10–12 reps</li>
            <li>Wrist Curls: 3 sets × 12–15 reps</li>
            <li>Reverse Wrist Curls: 3 sets × 12–15 reps</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Evening (Sweat & Tonic) – Optional HIIT or Ride class (30–50 min)</p>
          <p className="text-sm text-gray-600 ml-4">Choose from Core HIIT, Lift HIIT, or Recovery/Stretch class</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Tuesday: Lower Body or Full-Body Class + Swimming</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Morning (Sweat & Tonic) – Lower Body or Full-Body Class</p>
          <p className="text-sm text-gray-600 ml-4">Options: Small Group Training: Lower Body Strength, Booty HIIT, or Abs & Assets HIIT</p>
        </div>
        <div>
          <p className="font-medium">Afternoon/Evening – Swimming (30–45 min)</p>
          <p className="text-sm text-gray-600 ml-4">Intervals or moderate-paced laps for cardio and fat-burning</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Wednesday: Upper-Body (Arms/Forearms) + Short Cardio</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Morning/Afternoon (GoodLife) – Arms/Forearms Focus (60 min)</p>
          <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
            <li>Incline Dumbbell Press: 4 sets × 8–10 reps</li>
            <li>T-Bar Row or Machine Row: 4 sets × 8–10 reps</li>
            <li>Barbell or EZ-Bar Curls: 4 sets × 8–10 reps</li>
            <li>Close-Grip Bench Press or Dips: 4 sets × 8–10 reps</li>
            <li>Farmer's Walk: 3 sets × 30–45 sec</li>
            <li>Reverse Grip Biceps Curl: 3 sets × 10–12 reps</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Evening (Sweat & Tonic) – Light cardio or short HIIT (30 min)</p>
          <p className="text-sm text-gray-600 ml-4">Options: Mobility Flow, Hot Vinyasa Flow, or Mat Pilates</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Thursday: Active Recovery / Yoga-Pilates Focus</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Option 1: Yoga or Pilates Class at Sweat & Tonic (50–60 min)</p>
        </div>
        <div>
          <p className="font-medium">Option 2: Light cardio at GoodLife (20–30 min) + Sauna/Jacuzzi</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Friday: Upper-Body Strength (Chest/Back/Shoulders)</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Morning/Afternoon (GoodLife) – Upper-body session (60–75 min)</p>
          <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
            <li>Dumbbell Chest Press: 4 sets × 6–8 reps</li>
            <li>Pull-Ups (assisted if needed): 4 sets × 6–8 reps</li>
            <li>Standing Military Press: 3 sets × 8–10 reps</li>
            <li>Seated Cable Row: 3 sets × 8–10 reps</li>
            <li>Dumbbell Lateral Raises: 3 sets × 10–12 reps</li>
            <li>Hammer Curls: 3 sets × 10–12 reps</li>
            <li>Plate Pinches or Towel Grip Holds: 3 sets × 30 sec hold</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Evening (Sweat & Tonic) – Optional HIIT or Spin class (30–45 min)</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Saturday: Full-Body / Lower-Body + Forearms / Cardio</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Option 1: Lower Body Focus at GoodLife</p>
          <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
            <li>Squats or Leg Press: 4 sets × 8–10 reps</li>
            <li>Romanian Deadlift: 3 sets × 8–10 reps</li>
            <li>Walking Lunges: 3 sets × 10–12 reps</li>
            <li>Calf Raises: 3 sets × 12–15 reps</li>
            <li>Grip/Forearm work (Farmer's Walk, Wrist Curls)</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Option 2: Small Group Training or HIIT class at Sweat & Tonic</p>
        </div>
        <div>
          <p className="font-medium">Additional: 20–30 min steady-state cardio if time allows</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Sunday: Rest or Light Activity</h3>
      <div className="grid gap-2">
        <div>
          <p className="font-medium">Optional: Gentle swim, walking, or yoga</p>
        </div>
        <div>
          <p className="font-medium">Focus on recovery: Use sauna or jacuzzi, ensure adequate sleep</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

      {/* Nutrition Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-green-500" />
            Nutrition Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold mb-2">Daily Calorie Target</p>
            <Progress value={80} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-1">2,000–2,200 kcal/day</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">Protein</p>
              <p className="text-2xl font-bold text-blue-500">40%</p>
              <p className="text-sm text-gray-600">180–220g</p>
            </div>
            <div>
              <p className="font-semibold">Carbs</p>
              <p className="text-2xl font-bold text-green-500">30-35%</p>
              <p className="text-sm text-gray-600">150–200g</p>
            </div>
            <div>
              <p className="font-semibold">Fats</p>
              <p className="text-2xl font-bold text-yellow-500">25-30%</p>
              <p className="text-sm text-gray-600">55–70g</p>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Key Foods</p>
            <p className="text-sm text-gray-600">Omelets, smoothies, chicken thighs, salmon, ground beef, eggplants, zucchinis, tomatoes, quinoa, baguette</p>
          </div>
        </CardContent>
      </Card>

      {/* Recovery & Lifestyle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            Recovery & Lifestyle
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <Thermometer className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="font-semibold">Sauna & Jacuzzi</p>
              <p className="text-sm text-gray-600">10–15 minutes after every workout/class (4-6 days/week)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
              <Massage className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="font-semibold">Massage</p>
              <p className="text-sm text-gray-600">Once a week, preferably on a rest or light workout day</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Moon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold">Sleep</p>
              <p className="text-sm text-gray-600">Aim for 7–9 hours per night</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Droplet className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Hydration</p>
              <p className="text-sm text-gray-600">2–3 liters of water per day</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progression & Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="w-6 h-6 text-purple-500" />
            Progression & Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Scale className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold">Weigh-Ins</p>
              <p className="text-sm text-gray-600">Once a week, same time and conditions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Ruler className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="font-semibold">Measurements</p>
              <p className="text-sm text-gray-600">Waist, chest, arms - check monthly</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Camera className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="font-semibold">Progress Photos</p>
              <p className="text-sm text-gray-600">Front, side, and back every 4 weeks</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <ClipboardList className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="font-semibold">Strength Goals</p>
              <p className="text-sm text-gray-600">Track sets/reps/weights for progressive overload</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 12-Week Expectations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-500" />
            12-Week Expectations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold">Body Composition</p>
            <Progress value={75} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-1">Reduction in body fat percentage with muscle preservation</p>
          </div>
          <div>
            <p className="font-semibold">Strength and Muscle</p>
            <Progress value={60} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-1">Gradual increases in strength and muscle definition</p>
          </div>
          <div>
            <p className="font-semibold">Recovery and Wellness</p>
            <Progress value={70} className="w-full h-3" />
            <p className="text-sm text-gray-600 mt-1">Improved recovery time and overall well-being</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

