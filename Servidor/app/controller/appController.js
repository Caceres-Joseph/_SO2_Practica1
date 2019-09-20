'use strict';

var Task = require('../model/appModel.js');


/*
|------------------ 
| CPU
|------------------- 
*/
var os = require('os-utils');
var osu = require('node-os-utils');

exports.porcentajeCpu = function (req, res) {

  os.cpuUsage(function (v) {
    imprimir("cpu ..");
    res.send(JSON.stringify(v * 100));
  });

};

/*
|------------------ 
| RAM
|------------------- 
*/
var mem = osu.mem
exports.porcentajeRam = function (req, res) {


  mem.info()
    .then(info => {
      imprimir("ram ..");
      res.send(JSON.stringify(info));
    });
};

exports.totalRam = function (req, res) {

  res.send(JSON.stringify(Math.round(os.totalmem())));

};

function imprimir(cadena) {
  //console.log(cadena);
}




exports.killProcess = function (req, res) {


  var cmd = require('node-cmd');

  cmd.get(
    "kill -9 " + req.body.pid,
    function (err, data, stderr) {


      console.log("kill -9 " + req.body.pid);
      res.send(JSON.stringify(data));
    }
  );



};

/*
|------------------ 
| PROCESOS
|------------------- 
*/
/* const { snapshot } = require("process-list");

exports.getProcess = function (req, res) {
  snapshot('pid', 'name','owner').then(tasks => res.send(tasks)); 
}; */

var cmd = require('node-cmd');
var fs = require('fs'),
  readline = require('readline');

class atributo {

  constructor() {

    this.global = {};
  }

}


class operaciones {

  constructor() {

    this.variableGlobal = [];
    this.estadoTotal = {
      totalRegistros: 0,
      totalEjecutados: 0,
      totalSuspendidos: 0,
      totalZombies: 0,
      totalDetenido: 0,
    };
  }


  operar(items) {
    return items;
  }




  recorrerCarpetas(carpetas) {


    var retorno = [];

    for (var key in carpetas) {
      if (!isNaN(carpetas[key])) {

        var carpeta = carpetas[key];
        this.leerCarpeta(carpeta, retorno);

      }
    }
  }


  leerCarpeta(carpeta, retorno) {

    try {

      var data = fs.readFileSync("/proc/" + carpeta + "/status").toString();
    } catch (error) {
      console.log("Se murió");
      return;
    }

    var datos = {};
    var arreglo = data.toString().split("\n");
    for (const key in arreglo) {
      var valor = arreglo[key];

      var content = valor.split(":");

      if (content[0] == "Name") {
        datos.nombre = content[1].replace(/\s/g, '');
      } else if (content[0] == "Pid") {
        datos.pid = content[1].replace(/\s/g, '');
      } else if (content[0] == "RssAnon") {
        datos.memoria = content[1].replace(/\s/g, '');

      } else if (content[0] == "State") {
        var string1 = content[1].replace(/\s/g, '');


        if (string1.includes("R(")) {

          datos.estado = "Ejecutando";
          this.estadoTotal.totalEjecutados++;
        } else if (string1.includes("S(")) {

          datos.estado = "Hibernado";
          this.estadoTotal.totalSuspendidos++;
        } else if (string1.includes("T(")) {

          datos.estado = "Detenido";
          this.estadoTotal.totalDetenido++;
        } else if (string1.includes("Z(")) {

          datos.estado = "Zombie";
          this.estadoTotal.totalZombies++;
        } else {

          datos.estado = string1;
        }
      }
    }
    this.variableGlobal.push(datos)

    return datos;
  }

  asignarValor(valor) {

    this.variableGlobal.push(valor);


    //console.log(this.variableGlobal);
  }

  getVariable() {

    var retorno = {
      procesos: this.variableGlobal,
      totales: this.estadoTotal
    }


    return retorno;
  }


}



exports.getProcess = function (req, res) {

  /*  cmd.get(
     'ls',
     function (err, data, stderr) {
       console.log('the current working dir is : ', data)

       res.send(JSON.stringify(data));
     }
   ); */
  /* if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
  } */


  var path = "/proc";
  fs.readdir(path, function (err, items) {

    let user = new operaciones();
    user.recorrerCarpetas(items);
    //console.log("final");
    //console.log(user.getVariable()); 

    imprimir("proc ..");
    res.send(JSON.stringify(user.getVariable()));
  });


};


/* function recorrerCarpetas(carpetas) {


  var retorno = [];

  for (var key in carpetas) {
    if (!isNaN(carpetas[key])) {

      var carpeta = carpetas[key];
 

      retorno = leerCarpeta(carpeta);
      console.log(retorno);
      return;

      fs.readFile("/proc/" + carpeta + "/status", function (err, data) {
        if (err) {
          console.log(err);

        } else {

          //getJsonProcess(data.toString()); 
          console.log(data.toString());

          return data.toString();
        }
      });

      continue;

      try {

        var rd = readline.createInterface({
          input: fs.createReadStream("/proc/" + carpeta + "/status"),
          output: process.stdout,
          console: false
        });

        var datos = {};

        rd.on('line', function (line) {
          var content = line.split(":");

          if (content[0] == "Name") {
            datos.nombre = content[1].replace(/\s/g, '');
          } else if (content[0] == "Pid") {
            datos.pid = content[1].replace(/\s/g, '');
          } else if (content[0] == "RssAnon") {
            datos.memoria = content[1].replace(/\s/g, '');
          } else if (content[0] == "State") {
            datos.estado = content[1].replace(/\s/g, '');
          }
          console.log(datos);

          //retorno.push(datos);
          return datos;
        });
      } catch (error) {
        console.log("                                        >> error:" + error);
      }


    }


    return retorno;
  }
}


function leerCarpeta(carpeta) {

  var datos = {};

  fs.readFile("/proc/" + carpeta + "/status", function (err, data) {
    if (err) {
      console.log(err);

    } else {

      //console.log("============");
      //getJsonProcess(data.toString()); 
      //console.log(data.toString().split("\n"));
      var arreglo = data.toString().split("\n");
      for (const key in arreglo) {
        var valor = arreglo[key];

        var content = valor.split(":");

        if (content[0] == "Name") {
          datos.nombre = content[1].replace(/\s/g, '');
        } else if (content[0] == "Pid") {
          datos.pid = content[1].replace(/\s/g, '');
        } else if (content[0] == "RssAnon") {
          datos.memoria = content[1].replace(/\s/g, '');
        } else if (content[0] == "State") {
          datos.estado = content[1].replace(/\s/g, '');
        }
      }
      console.log("retornando datos");
      return "joder";
      console.log("no llego");
    }
  });
  return datos;
} */


function getJsonProcess(contenido) {
  console.log(contenido);
  var arrrayContenido = contenido.split(":");
  for (var linea in arrrayContenido) {
    console.log("[" + linea + "]");
  }
}

exports.totalRam = function (req, res) {

  res.send(JSON.stringify(Math.round(os.totalmem())));

};

/* 
|--------------------------------------------------------------------------
| Controlador
|--------------------------------------------------------------------------
*/



exports.list_all_tasks = function (req, res) {
  Task.getAllTask(function (err, task) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', task);
    res.send(task);
  });
};


exports.saludo = function (req, res) {
  console.log("saludnado");
  res.send("hola maje");
};


exports.create_a_task = function (req, res) {
  console.log(req.body);
  var new_task = new Task(req.body);


  console.log(new_task);
  Task.createTask(new_task, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};


exports.read_a_task = function (req, res) {
  Task.getTaskById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function (req, res) {
  Task.remove(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json({
      message: 'Task successfully deleted'
    });
  });
};