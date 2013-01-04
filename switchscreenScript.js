#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.A))
	{
		print("...");
		Application.LoadLevel("1");
	}
	if(Input.GetKey(KeyCode.D))
	{
		Application.LoadLevel("2");
	}
}