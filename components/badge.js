export default function Badge({tag}) {
    return (
      <>
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
          <svg className="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
            <circle cx={4} cy={4} r={3} />
          </svg>
          <span>$0 (<span className="line-through">{tag}</span>) </span>
        </span>
      </>
    )
  }