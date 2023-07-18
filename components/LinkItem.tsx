import React from 'react'

interface LinkItemProps {
    className?: string
    content: string
}

const LinkItem: React.FC<LinkItemProps> = (
    { className, content }
) => {




  return (
    <span className={className}>
        {
            content
        }
    </span>
  )
}

export default LinkItem
