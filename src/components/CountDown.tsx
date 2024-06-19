"use client";
import React, { useEffect, useState } from 'react';
import { Paper, Group, Text, Title } from '@mantine/core';
import { Cinzel } from 'next/font/google'
const cinzel = Cinzel({ subsets: ['latin'] })
interface CountDownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = {} as TimeLeft;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);
    if (!mounted) {
        return null;
    }
    return (
        <Group className='flex flex-wrap justify-between items-center text-white text-center w-full mx-auto' style={{ width: "max-content" }}>
            <Paper className='bg-vampire-light px-4 py-2 md:px-11 md:py-6' shadow="xs" radius="md" >
                <Title order={2} size="xl">{timeLeft.days}</Title>
                <Title className={cinzel.className + " font-bold"} order={4} size="sm">&nbsp;&nbsp;&nbsp;Days&nbsp;&nbsp;&nbsp; </Title>
            </Paper>
            <span className='colon mx-0 md:mx-2'>:</span>
            <Paper className='bg-vampire-light px-4 py-2 md:px-10 md:py-6' shadow="xs" radius="md" >
                <Title order={2} size="xl">{timeLeft.hours}</Title>
                <Title className={cinzel.className + " font-bold"} order={4} size="sm">&nbsp;&nbsp;Hours&nbsp;&nbsp;</Title>
            </Paper>
            <span className='colon mx-0 md:mx-2'>:</span>
            <Paper className='bg-vampire-light px-4  py-2 md:px-10 md:py-6' shadow="xs" radius="md" >
                <Title order={2} size="xl">{timeLeft.minutes}</Title>
                <Title className={cinzel.className + " font-bold"} order={4} size="sm">Minutes</Title>
            </Paper>
            <span className='colon mx-0 md:mx-2'>:</span>
            <Paper className='bg-vampire-light px-4 py-2 md:px-9 md:py-6' shadow="xs" radius="md">
                <Title order={2} size="xl">{timeLeft.seconds}</Title>
                <Title className={cinzel.className + " font-bold"} order={4} size="sm">Seconds</Title>
            </Paper>
        </Group>
    );
};

export default CountDown;
