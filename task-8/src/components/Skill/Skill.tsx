export default function Skill({ value }: { value: string }) {
  return (
    <button className='px-1 py-0.5 text-xs text-indigo-600 bg-slate-200 min-w-10 mr-2 mb-1'>
      {value}
    </button>
  );
}
