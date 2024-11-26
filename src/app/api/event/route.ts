import { NextResponse } from "next/server";
import event from "../../../Jsons/events.json";

const events = event;

export function GET(){
    return NextResponse.json(events)
}