'use client';

export default function LoadingSpinner() {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-cyber/30 border-t-cyber rounded-full animate-spin" />
    </div>
  );
}
