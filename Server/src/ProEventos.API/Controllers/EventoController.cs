using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProEventos.API.Models;

namespace ProEventos.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventoController : ControllerBase
    {
        private List<Evento> _eventos;

        public EventoController()
        {
            _eventos = new()
            {
                new Evento(){
                    Id = 1,
                    Local = "Salvador",
                    DataEvento = "03/01/2022",
                    Tema = ".NET 6",
                    QtdPessoas = 250,
                    Lote = "1º Lote",
                    ImagemURL = "evento.png"
                },
                new Evento(){
                    Id = 2,
                    Local = "Campinas",
                    DataEvento = "22/01/2022",
                    Tema = "Angular",
                    QtdPessoas = 100,
                    Lote = "1º Lote",
                    ImagemURL = "evento.png"
                }
            };
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _eventos;
        }

        [HttpGet("{id}")]
        public Evento Get(int id)
        {
            return _eventos.Where(e => e.Id == id).FirstOrDefault();
        }
    }
}