function newMission(action, target) {
    return (action !== "kill" && action !== "murder" && action !== "torture") && !(goodPeople.includes(target)) && !newMission.caller.toString().includes(["secret", "plan"].join(" ")) && !(new Error('Failed').stack.toString().includes("EvilGovernment.issueCommand"));
}