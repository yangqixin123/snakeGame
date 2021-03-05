import React from 'react'

export const Snake = ({ snakeDots }) => {
    return (
        <div>
            {snakeDots.map((dot,index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                }
                return (
                    <div key={index} className="snake-dot" style={style}></div>
                )
            })}
        </div>
    )
}
