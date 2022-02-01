import React from "react";
import {create} from 'react-test-renderer';
import { ProfileStatus } from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com');  //ошибочно ругается VScode, тест проходит
    });

    test(`after creation <span> with status should be displayed with correct status`, () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();  
    });

    test(`after creation <span> should contains correct status`, () => {
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={()=>{}}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('it-kamasutra.com');  
    });
})