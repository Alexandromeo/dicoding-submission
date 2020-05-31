let buttonSkill = document.getElementById("see-skills");
let valueSkills = [];
let nameSkills = ['html-css','js','bootstrap','jquery','php','ci','vue','laravel','wp','seo']; 

let showBar = (key, value) => {
	for(let i=0; i<key.length; i++)
	{
		let indicator = document.getElementById(key[i]);
		indicator.style.width = value[i];
	}
}

let changeTitle = () => {
	let title = buttonSkill.innerHTML;
	if(title=="Show my Skills")
	{
		buttonSkill.innerHTML = "Hide my Skills";
		valueSkills = ['87%', '75%','85%','82%','88%','83%','72%','70%','86%','89%'];
		showBar(nameSkills, valueSkills);
	}

	else
	{
		valueSkills = ['0%', '0%','0%','0%','0%','0%','0%','0%','0%','0%'];
		showBar(nameSkills, valueSkills);
		buttonSkill.innerHTML = "Show my Skills";
	}
}

buttonSkill.addEventListener("click", function()
{
	changeTitle();
});