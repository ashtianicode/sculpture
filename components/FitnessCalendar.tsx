"use client"

import React, { useState, useCallback, useMemo } from 'react'
import moment from 'moment'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FitnessEvent {
  id: number
  title: string
  date: Date
  exercises: { id: number; description: string; completed: boolean }[]
  meals: string[]
  progressTracking: string[]
}

export function FitnessCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const events = useMemo(() => {
    const startDate = new Date(currentDate)
    startDate.setDate(startDate.getDate() - startDate.getDay()) // Start from the beginning of the week
    
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)
      const dayOfWeek = date.getDay()
      let title: string
      let exercises: { id: number; description: string; completed: boolean }[] = []
      let meals: string[] = []
      let progressTracking: string[] = []

      switch (dayOfWeek) {
        case 0: // Sunday
          title = "Rest Day"
          exercises = [
            { id: 1, description: "Light stretching or yoga (15-20 minutes)", completed: false },
            { id: 2, description: "Foam rolling (10 minutes)", completed: false },
          ]
          meals = [
            "Breakfast: Greek yogurt with berries and granola",
            "Lunch: Grilled chicken salad with mixed greens",
            "Dinner: Baked salmon with roasted vegetables",
            "Snack: Apple slices with almond butter",
          ]
          progressTracking = ["Weekly weigh-in", "Take progress photos"]
          break
        case 1: // Monday
          title = "Upper Body Strength"
          exercises = [
            { id: 1, description: "Bench press: 4 sets of 8-10 reps", completed: false },
            { id: 2, description: "Overhead press: 3 sets of 8-10 reps", completed: false },
            { id: 3, description: "Bent-over rows: 4 sets of 10-12 reps", completed: false },
            { id: 4, description: "Tricep pushdowns: 3 sets of 12-15 reps", completed: false },
            { id: 5, description: "20 minutes moderate-intensity cardio", completed: false },
          ]
          meals = [
            "Breakfast: Oatmeal with banana and protein powder",
            "Lunch: Turkey and avocado wrap with side salad",
            "Dinner: Lean beef stir-fry with brown rice",
            "Snack: Protein shake and handful of almonds",
          ]
          progressTracking = ["Record weights lifted for each exercise"]
          break
        case 2: // Tuesday
          title = "Lower Body + Swimming"
          exercises = [
            { id: 1, description: "Squats: 4 sets of 8-10 reps", completed: false },
            { id: 2, description: "Romanian deadlifts: 3 sets of 10-12 reps", completed: false },
            { id: 3, description: "Leg press: 3 sets of 12-15 reps", completed: false },
            { id: 4, description: "Calf raises: 4 sets of 15-20 reps", completed: false },
            { id: 5, description: "30 minutes swimming", completed: false },
          ]
          meals = [
            "Breakfast: Scrambled eggs with spinach and whole grain toast",
            "Lunch: Tuna salad sandwich on whole grain bread",
            "Dinner: Grilled chicken breast with quinoa and steamed broccoli",
            "Snack: Greek yogurt with mixed berries",
          ]
          progressTracking = ["Measure thigh and calf circumference"]
          break
        case 3: // Wednesday
          title = "Arms and Forearms"
          exercises = [
            { id: 1, description: "Bicep curls: 4 sets of 10-12 reps", completed: false },
            { id: 2, description: "Hammer curls: 3 sets of 12-15 reps", completed: false },
            { id: 3, description: "Wrist curls: 3 sets of 15-20 reps", completed: false },
            { id: 4, description: "Reverse wrist curls: 3 sets of 15-20 reps", completed: false },
            { id: 5, description: "Farmer's walks: 3 sets of 30 seconds", completed: false },
            { id: 6, description: "15 minutes HIIT cardio", completed: false },
          ]
          meals = [
            "Breakfast: Protein pancakes with fresh berries",
            "Lunch: Grilled chicken Caesar salad",
            "Dinner: Baked cod with sweet potato and green beans",
            "Snack: Cottage cheese with pineapple",
          ]
          progressTracking = ["Measure bicep and forearm circumference"]
          break
        case 4: // Thursday
          title = "Active Recovery"
          exercises = [
            { id: 1, description: "45-minute yoga or Pilates class", completed: false },
            { id: 2, description: "20 minutes light cardio (walking or cycling)", completed: false },
            { id: 3, description: "Full body stretching routine", completed: false },
          ]
          meals = [
            "Breakfast: Smoothie bowl with mixed fruits and chia seeds",
            "Lunch: Vegetable and lentil soup with whole grain crackers",
            "Dinner: Tofu and vegetable stir-fry with brown rice",
            "Snack: Carrot sticks with hummus",
          ]
          progressTracking = ["Rate overall energy levels (1-10 scale)"]
          break
        case 5: // Friday
          title = "Upper Body Focus"
          exercises = [
            { id: 1, description: "Pull-ups or lat pulldowns: 4 sets of 8-10 reps", completed: false },
            { id: 2, description: "Incline dumbbell press: 3 sets of 10-12 reps", completed: false },
            { id: 3, description: "Face pulls: 3 sets of 12-15 reps", completed: false },
            { id: 4, description: "Lateral raises: 3 sets of 12-15 reps", completed: false },
            { id: 5, description: "20 minutes moderate-intensity cardio", completed: false },
          ]
          meals = [
            "Breakfast: Egg white omelet with vegetables and whole grain toast",
            "Lunch: Grilled chicken breast with quinoa and roasted vegetables",
            "Dinner: Lean beef burger (no bun) with sweet potato fries and salad",
            "Snack: Protein bar and an apple",
          ]
          progressTracking = ["Record weights lifted for each exercise"]
          break
        case 6: // Saturday
          title = "Full Body + Cardio"
          exercises = [
            { id: 1, description: "Deadlifts: 4 sets of 6-8 reps", completed: false },
            { id: 2, description: "Push-ups: 3 sets to failure", completed: false },
            { id: 3, description: "Dumbbell lunges: 3 sets of 10-12 reps per leg", completed: false },
            { id: 4, description: "Dumbbell shoulder press: 3 sets of 10-12 reps", completed: false },
            { id: 5, description: "Plank: 3 sets of 30-60 seconds", completed: false },
            { id: 6, description: "30 minutes swimming or cardio of choice", completed: false },
          ]
          meals = [
            "Breakfast: Whole grain waffles with peanut butter and banana",
            "Lunch: Grilled salmon with mixed green salad and quinoa",
            "Dinner: Lean steak with roasted potatoes and asparagus",
            "Snack: Mixed nuts and dried fruits",
          ]
          progressTracking = ["Measure waist circumference"]
          break
      }

      return {
        id: index,
        title,
        date,
        exercises,
        meals,
        progressTracking,
      }
    })
  }, [currentDate])

  const [selectedEvent, setSelectedEvent] = useState<FitnessEvent | null>(null)

  const handleSelectEvent = useCallback((event: FitnessEvent) => {
    setSelectedEvent(event)
  }, [])

  const handleExerciseCompletion = useCallback((eventId: number, exerciseId: number, completed: boolean) => {
    setSelectedEvent(prevEvent => {
      if (prevEvent && prevEvent.id === eventId) {
        return {
          ...prevEvent,
          exercises: prevEvent.exercises.map(exercise =>
            exercise.id === exerciseId ? { ...exercise, completed } : exercise
          )
        }
      }
      return prevEvent
    })
  }, [])

  const navigateWeek = useCallback((direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7))
      return newDate
    })
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Fitness Calendar</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => navigateWeek('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">
              {moment(currentDate).format('MMMM D, YYYY')}
            </span>
            <Button variant="outline" size="icon" onClick={() => navigateWeek('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardDescription>Track your weekly fitness journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-4">
          {events.map((event) => (
            <Card key={event.id} className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSelectEvent(event)}>
              <CardHeader className="p-2">
                <CardTitle className="text-sm">{moment(event.date).format('ddd')}</CardTitle>
                <CardDescription className="text-xs">{event.title}</CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-xs font-semibold mb-1">Exercises: {event.exercises.length}</p>
                <p className="text-xs font-semibold mb-1">Meals: {event.meals.length}</p>
                <p className="text-xs font-semibold">Tracking: {event.progressTracking.length}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedEvent && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>{selectedEvent.title}</CardTitle>
              <CardDescription>{moment(selectedEvent.date).format('MMMM D, YYYY')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Exercises</h3>
                  <ul className="space-y-2">
                    {selectedEvent.exercises.map(exercise => (
                      <li key={exercise.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`exercise-${selectedEvent.id}-${exercise.id}`}
                          checked={exercise.completed}
                          onCheckedChange={(checked) => 
                            handleExerciseCompletion(selectedEvent.id, exercise.id, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`exercise-${selectedEvent.id}-${exercise.id}`}
                          className={`text-sm ${exercise.completed ? 'line-through text-gray-500' : ''}`}
                        >
                          {exercise.description}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Meals</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedEvent.meals.map((meal, index) => (
                      <li key={index} className="text-sm">{meal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Progress Tracking</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedEvent.progressTracking.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

