<?php
	// Conectamos coa base de datos
	require("conexion.php");

	$consulta = "UPDATE incidencias
					SET data='".$_POST['data']."',
						aula='".$_POST['aula']."',
						profeComunica='".$_POST['profeComunica']."',
						profeResolve='".$_POST['profeResolve']."',
						descricion='".$_POST['descricion']."',
						resolta='".$_POST['resolta']."'
				  WHERE codigo='".$_POST['codigo']."'"; 

	$conexion->query($consulta);
	$conexion->close(); 
?>