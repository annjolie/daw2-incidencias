<?php
	// Conectamos coa base de datos
	require("conexion.php");
	
	$data = substr($_POST['data'],6,4).'-'.substr($_POST['data'],3,2).'-'.substr($_POST['data'],0,2);
	$consulta = "INSERT INTO incidencias (data, aula, profeComunica, profeResolve, descricion, resolta)
				 VALUES ('".$data."','".$_POST['aula']."','".$_POST['profeComunica']."','".$_POST['profeResolve']."','".$_POST['descricion']."','".$_POST['resolta']."')";

	$conexion->query($consulta);
	$conexion->close();
?>