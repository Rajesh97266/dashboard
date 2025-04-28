import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Card } from "./ui/card";

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
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
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
