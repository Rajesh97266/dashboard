"use client"
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

const dashboardTasks = [
  "Update website analytics tracking.",
  "Review user feedback reports.",
  "Prepare monthly sales report.",
  "Approve pending product listings.",
  "Check server performance metrics.",
  "Update customer support FAQs.",
  "Schedule team meeting for project updates.",
  "Fix UI bugs reported in the dashboard.",
  "Push new marketing banners live.",
  "Test payment gateway integration.",
  "Optimize product images for faster loading.",
  "Verify inventory data sync with suppliers.",
  "Prepare email newsletter draft.",
  "Clean up old database logs.",
  "Conduct QA testing for mobile responsiveness.",
];

const TodoList = () => {
  const [date, setDate] = useState(new Date());
   const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="flex items-center justify-center gap-2 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] mx-auto">
            <CalendarIcon className="h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
        <div className="flex flex-col gap-4">
          {dashboardTasks.map((task, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  id={`item${index + 1}`}
                  defaultChecked={index === 0 || index === 1}
                />
                <label
                  htmlFor={`item${index + 1}`}
                  className="text-sm text-muted-foreground"
                >
                  {task}
                </label>
              </div>
            </Card>
          ))}{" "}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
