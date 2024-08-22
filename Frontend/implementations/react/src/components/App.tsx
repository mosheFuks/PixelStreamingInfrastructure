// Copyright Epic Games, Inc. All Rights Reserved.

import React, { useState } from 'react';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';

export const App = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <h1
            style={{
                color: 'black',
                fontSize: '4rem',
                textAlign: 'center',
                position: 'absolute',
                top: '20%'
            }}
            >
                Supernal Sim
            </h1>
            <h3
            style={{
                color: 'black',
                fontSize: '2rem',
                textAlign: 'center',
                position: 'absolute',
                top: '30%'
            }}
            >
                Experience Urban Air Mobility
            </h3>
            
            <PixelStreamingWrapper
                initialSettings={{
                    AutoPlayVideo: false,
                    AutoConnect: true,
                    ss: 'ws://localhost:80',
                    StartVideoMuted: true,
                    HoveringMouse: true
                }}
            />
            
        </div>
    );
};
