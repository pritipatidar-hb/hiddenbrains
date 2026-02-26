'use client';

import React, { useState } from 'react';

const ReCaptchaCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div
            onClick={() => setIsChecked(!isChecked)}
            className="bg-[#f9f9f9] border border-gray-200 p-4 rounded-lg flex items-center justify-between max-w-[300px] cursor-pointer select-none"
        >
            <div className="flex items-center">
                <div className={`w-6 h-6 border-2 rounded mr-3 bg-white flex items-center justify-center transition-all ${isChecked ? 'border-green-500' : 'border-gray-300'}`}>
                    {isChecked && (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                </div>
                <span className="text-sm font-medium text-gray-600">I&apos;m not a robot</span>
            </div>
            <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-1">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                        <path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Z" />
                    </svg>
                </div>
                <div className="text-[10px] text-gray-400 leading-none">reCAPTCHA</div>
                <div className="text-[8px] text-gray-400 leading-none">Privacy - Terms</div>
            </div>
        </div>
    );
};

export default ReCaptchaCheckbox;
