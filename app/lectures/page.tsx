'use client'
import React from "react";
import { LazyImport } from "@/utils/dynamicImport";

const Teachers = () => {
  const TeacherCpt = LazyImport('SCREENS', 'Teachers');
  return <TeacherCpt />
}

export default Teachers