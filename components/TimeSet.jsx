"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useRef } from "react";

const TimeSet = ({ setTimerData }) => {
  const [time, setTime] = useState("00:05:00");
  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [draggedElement, setDraggedElement] = useState(null);

  const handleMouseDown = (e, element) => {
    setDragging(true);
    setStartY(e.clientY);
    setDraggedElement(element);
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDraggedElement(null);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = startY - e.clientY;
      if (Math.abs(deltaY) >= 10) {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds;
        if (draggedElement === "hours") {
          newHours = deltaY > 0 ? (hours + 1) % 24 : (hours - 1 + 24) % 24;
        } else if (draggedElement === "minutes") {
          newMinutes =
            deltaY > 0 ? (minutes + 1) % 60 : (minutes - 1 + 60) % 60;
        } else if (draggedElement === "seconds") {
          newSeconds =
            deltaY > 0 ? (seconds + 1) % 60 : (seconds - 1 + 60) % 60;
        }
        setTime(
          `${newHours < 10 ? "0" : ""}${newHours}:${
            newMinutes < 10 ? "0" : ""
          }${newMinutes}:${newSeconds < 10 ? "0" : ""}${newSeconds}`
        );
        setStartY(e.clientY);
      }
    }
  };
  const handleInputChange = (e, element) => {
    const value = e.target.value;
    const [hours, minutes, seconds] = time.split(":").map(Number);
    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds;
    if (element === "hours") {
      newHours = Math.min(Math.max(value, 0), 23);
    } else if (element === "minutes" || element === "seconds") {
      const newValue = Math.min(Math.max(value, 0), 59);
      if (element === "minutes") {
        newMinutes = newValue;
      } else {
        newSeconds = newValue;
      }
    }
    setTime(
      `${newHours < 10 ? "0" : ""}${newHours}:${
        newMinutes < 10 ? "0" : ""
      }${newMinutes}:${newSeconds < 10 ? "0" : ""}${newSeconds}`
    );
  };

  const handleScroll = (e, element) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const [hours, minutes, seconds] = time.split(":").map(Number);
    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds;
    if (element === "hours") {
      newHours = direction > 0 ? (hours + 1) % 24 : (hours - 1 + 24) % 24;
    } else if (element === "minutes") {
      newMinutes = direction > 0 ? (minutes + 1) % 60 : (minutes - 1 + 60) % 60;
    } else if (element === "seconds") {
      newSeconds = direction > 0 ? (seconds + 1) % 60 : (seconds - 1 + 60) % 60;
    }
    setTime(
      `${newHours < 10 ? "0" : ""}${newHours}:${
        newMinutes < 10 ? "0" : ""
      }${newMinutes}:${newSeconds < 10 ? "0" : ""}${newSeconds}`
    );
  };
  const [hours, minutes, seconds] = time.split(":");

  const controlsHour = useAnimation();
  const controlsMinute = useAnimation();
  const controlsSecond = useAnimation();

  const prevHoursRef = useRef(hours);

  useEffect(() => {
    const prevHours = prevHoursRef.current;
    prevHoursRef.current = hours;

    const direction = hours > prevHours ? -2.5 : 2.5;

    controlsHour
      .start({
        y: direction,
        opacity: 1,
        transition: { duration: 0.2 },
      })
      .then(() => {
        controlsHour.start({
          y: 0,
          opacity: 0.85,
          transition: { duration: 0.2 },
        });
      });
  }, [hours]);

  const prevMinutesRef = useRef(minutes);
  const prevSecondsRef = useRef(seconds);

  useEffect(() => {
    const prevMinutes = prevMinutesRef.current;
    prevMinutesRef.current = minutes;

    const direction = minutes > prevMinutes ? -2.5 : 2.5;

    controlsMinute
      .start({
        y: direction,
        opacity: 1,
        transition: { duration: 0.2 },
      })
      .then(() => {
        controlsMinute.start({
          y: 0,
          opacity: 0.85,
          transition: { duration: 0.2 },
        });
      });
  }, [minutes]);

  useEffect(() => {
    const prevSeconds = prevSecondsRef.current;
    prevSecondsRef.current = seconds;

    const direction = seconds > prevSeconds ? -2.5 : 2.5;

    controlsSecond
      .start({
        y: direction,
        opacity: 1,
        transition: { duration: 0.2 },
      })
      .then(() => {
        controlsSecond.start({
          y: 0,
          opacity: 0.85,
          transition: { duration: 0.2 },
        });
      });
  }, [seconds]);

  // update the timer data
  useEffect(() => {
    setTimerData(time);
  }, [time]);

  return (
    <div className=" w-full justify-center flex flex-col items-center">
      <div className="opacity-70 w-1/2 items-center justify-center flex flex-col">
        <div className="w-2/8 h-11/12 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold px-2 py-2 gap-2 flex-row">
          <div className="aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {(hours - 1 && hours - 1 < 0 ? 24 : hours - 1)
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="w-1/8 h-14  rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <div className="w-2/8 aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {(minutes - 1 && minutes - 1 < 0 ? 59 : minutes - 1)
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="w-1/8 h-14   rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <div className="w-2/8 aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {(seconds - 1 && seconds - 1 < 0 ? 59 : seconds - 1)
              .toString()
              .padStart(2, "0")}
          </div>
        </div>
      </div>
      <div
        className="w-full items-center justify-center flex flex-col gap-4 px-4 py-4"
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="w-2/8 h-20 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold px-2 py-2 gap-2 flex-row">
          <motion.div
            animate={controlsHour}
            className="aspect-square h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            onMouseDown={(e) => handleMouseDown(e, "hours")}
            onWheel={(e) => handleScroll(e, "hours")}
          >
            <input
              type="number"
              min="0"
              value={hours}
              onChange={(e) => handleInputChange(e, "hours")}
              className="flex items-center text-center justify-center w-full h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            />
          </motion.div>
          <div className="w-1/8 h-16   rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <motion.div
            className="w-2/8 aspect-square h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            onMouseDown={(e) => handleMouseDown(e, "minutes")}
            onWheel={(e) => handleScroll(e, "minutes")}
            animate={controlsMinute}
          >
            <input
              type="number"
              value={minutes}
              onChange={(e) => handleInputChange(e, "minutes")}
              className="flex items-center text-center justify-center w-full h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            />
          </motion.div>
          <div className="w-1/8 h-16  rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <motion.div
            value={seconds}
            animate={controlsSecond}
            className="w-2/8 aspect-square h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            onMouseDown={(e) => handleMouseDown(e, "seconds")}
            onWheel={(e) => handleScroll(e, "seconds")}
          >
            <input
              type="number"
              value={seconds}
              onChange={(e) => handleInputChange(e, "seconds")}
              className="flex items-center text-center justify-center w-full h-16 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold"
            />
          </motion.div>
        </div>
      </div>
      <div className="opacity-70 w-1/2 items-center justify-center flex flex-col">
        <div className="w-2/8 h-11/12 bg-white rounded-md text-2xl items-center justify-center bg-opacity-5 flex font-semibold px-2 py-2 gap-2 flex-row">
          <div className="aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {/* hours{number}-1 */}
            {(Number(hours) + 1 && Number(hours) + 1 < 24
              ? Number(hours) + 1
              : 0
            )
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="w-1/8 h-14  rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <div className="w-2/8 aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {(Number(minutes) + 1 && Number(minutes) + 1 < 60
              ? Number(minutes) + 1
              : 0
            )
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="w-1/8 h-14  rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            :
          </div>
          <div className="w-2/8 aspect-square h-14 bg-white rounded-md text-2xl items-center justify-center bg-opacity-10 flex font-semibold">
            {(Number(seconds) + 1 < 60 ? Number(seconds) + 1 : 0)
              .toString()
              .padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSet;
