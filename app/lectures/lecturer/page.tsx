'use client'
import React from "react";
import { LazyImport } from "@/utils/dynamicImport";

const Teacher = () => {
  const DynamicTeacher = LazyImport('SCREENS', 'Teachers/Teacher');
  return <DynamicTeacher />
}

export default Teacher;