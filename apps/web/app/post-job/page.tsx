"use client";

import { PostJobForm } from "../../components/post-job-form";

export default function PostJobPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <PostJobForm
        onClose={() => {
          window.history.back();
        }}
        onSubmit={(data) => {
          console.log("Job post submitted:", data);
        }}
      />
    </div>
  );
}
