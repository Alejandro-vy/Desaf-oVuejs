const app = new Vue({
    el:'#app',
    data: {
        productos: [],
        nuevoNombre:'',
        nuevaDescripcion:'',
        nuevoPrecio:'',
        formActualizar: false,
        indexActualizar: -1,
    },
    methods:{
        agregarProducto: function(){
           this.productos.push({
              nombre: this.nuevoNombre,
              descripcion:this.nuevaDescripcion,
              precio: this.nuevoPrecio
           
           });
           console.log(this.productos);
           this.nuevoNombre='';
           this.nuevaDescripcion='';
           this.nuevoPrecio='';
           
        },
        editarProducto:function(index){
            
             this.indexActualizar = index;
             this.nuevoNombre = this.productos[index].nombre;
             this.nuevaDescripcion =this.productos[index].descripcion;
             this.nuevoPrecio=this.productos[index].precio;
            
             //con esto podre mostrar el formulario
             this.formActualizar = true;
          
            
        },
        guardarCambios: function (index) {
            this.formActualizar = false;

            //Actualizar los datos del objeto.
            this.productos[index].nombre = this.nuevoNombre;
            this.productos[index].descripcion =this.nuevaDescripcion;
            this.productos[index].precio = this.nuevoPrecio;
              
            
        },
        eliminarProducto:function(index){
            this.productos.splice(index,1);  
        }
    }

});