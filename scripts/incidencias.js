$(function() {
    $('#profeResolve').parent().hide();
    $('#form1>div:contains(Profesor que resolveu a incidencia)').hide();
    $('input[name=resolta]').prop("disabled", true);
    $('#sidebar1 a:contains(baixas),#sidebar1 a:contains(modificacións)').prop("disabled", true);
    fechaActual();

    // 1.A data inicial que se amosará será por defecto a do día actual
    function fechaActual() {
        var fechaActual = new Date();
        var dia = fechaActual.getDate() < 10 ? "0" + fechaActual.getDate() : fechaActual.getDate();
        var mes = fechaActual.getMonth() < 10 ? "0" + fechaActual.getMonth() : fechaActual.getMonth();
        var ano = fechaActual.getFullYear();

        $("#data").val(dia + '/' + mes + '/' + ano);
    }

    $.getJSON('servidor/cargarAulas.php', function(datos) {
        $(datos).each(function() {
            $('#aula').append('<option value=' + this.codigo + '>' + this.nome + '</option>');
        });
    });
    //Tanto o profesor que comunica a incidencia como o profesor que a resolve serán obtidos dinamicamente da táboa de profesores
    $.getJSON('servidor/cargarProfesores.php', function(datos) {
        $(datos).each(function() {
            $('#profeComunica, #profeResolve').append('<option value=' + this.codigo + '>' + this.nome + '  ' + this.apelidos + '</option>')
        });
    });
    //Hai que dotar de contido aos botóns e ligazóns que existen na páxina programando o evento asociado

    //limpiar
    $("#limpar").click(function() {
        $("#form1").trigger("reset");
        fechaActual();
    });
    //validar antes de enviar

    $("#enviar").click(function() {
        var mensaje = '';
        if ($("#aula").val() == '0') {
            mensaje += 'Por favor seleccione un Aula\n';
        }
        if ($("#profeComunica").val() == '0') {
            mensaje += 'Por favor seleccione el profesor que comunica la incidencia\n';
        }
        if ($("#descricion").val() == '') {
            mensaje += 'Por favor ingrese una descripcion de la incidencia\n';
        }
        if (mensaje != '')
            alert(mensaje)

    });

})