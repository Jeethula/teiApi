import { NextResponse } from "next/server";
import speaker from "../../../Jsons/speakers.json";

const speakers = speaker;

export function GET(){
    const speakersString = JSON.stringify(speakers, null, 2);
    return NextResponse.json(speakersString)
}