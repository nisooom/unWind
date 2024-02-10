import React from 'react'

function page() {
  return (
    <div>
        <nav class="navbar">
            <ul className="flex-col-reverse gap-3">
                <li><a href="#">Home</a></li>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Shop</a></li>

            </ul>
        </nav>
    </div>
  )
}

export default page