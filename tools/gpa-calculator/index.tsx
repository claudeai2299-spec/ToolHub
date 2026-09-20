"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import ResultBox from "@/components/tool-page/ResultBox";

const GRADE_POINTS: Record<string, number> = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

interface Course {
  id: number;
  grade: string;
  credits: string;
}

let nextId = 1;

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: nextId++, grade: "A", credits: "3" },
    { id: nextId++, grade: "B+", credits: "3" },
  ]);
  const [result, setResult] = useState<string | null>(null);
  const [subValue, setSubValue] = useState<string | undefined>();
  const [error, setError] = useState("");

  const addCourse = () => {
    setCourses([...courses, { id: nextId++, grade: "A", credits: "3" }]);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: number, field: "grade" | "credits", value: string) => {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const reset = () => {
    setCourses([{ id: nextId++, grade: "A", credits: "3" }]);
    setResult(null);
    setSubValue(undefined);
    setError("");
  };

  const calculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      if (course.credits.trim() === "" || isNaN(credits) || credits <= 0) {
        setError("Enter valid, positive credit hours for every course.");
        setResult(null);
        return;
      }
      totalPoints += GRADE_POINTS[course.grade] * credits;
      totalCredits += credits;
    }

    if (totalCredits === 0) {
      setError("Add at least one course.");
      setResult(null);
      return;
    }

    setError("");
    const gpa = totalPoints / totalCredits;
    setResult(gpa.toFixed(2));
    setSubValue(`${totalCredits} total credit hours · US 4.0 scale`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        {courses.map((course, i) => (
          <div key={course.id} className="flex items-end gap-3">
            <div className="flex-1">
              <Select
                label={`Course ${i + 1} grade`}
                value={course.grade}
                onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
              >
                {Object.keys(GRADE_POINTS).map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </Select>
            </div>
            <div className="w-28">
              <Input
                label="Credits"
                type="number"
                inputMode="decimal"
                min="0"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
              />
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => removeCourse(course.id)}
              disabled={courses.length === 1}
              aria-label={`Remove course ${i + 1}`}
              className="mb-0.5 shrink-0"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>

      <Button type="button" variant="secondary" onClick={addCourse} className="self-start">
        <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
        Add course
      </Button>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <Button onClick={calculate}>Calculate GPA</Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <ResultBox
        label="GPA"
        value={result}
        subValue={subValue}
        onReset={result ? reset : undefined}
      />
    </div>
  );
      }
