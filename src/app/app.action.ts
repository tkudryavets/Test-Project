//Read
export class GetPlans {
    static readonly type = '[Plans] Fetch';
}

//Create
export class AddPlan {
    static readonly type = '[Plans] Add';
    constructor(public payload: any) { }
}

//Update
export class UpdatePlan {
    static readonly type = '[Plans] Update';
    constructor(public payload: any) { }
}
