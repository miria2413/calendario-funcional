
/********CALENDARIO */

document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById('calendar');
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
  ];

  // Adicionar botões de navegação
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Anterior';
  prevButton.addEventListener('click', () => renderCalendar(year, month - 1));

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Próximo';
  nextButton.addEventListener('click', () => renderCalendar(year, month + 1));

  calendar.parentNode.insertBefore(prevButton, calendar);
  calendar.parentNode.appendChild(nextButton);

  let year = new Date().getFullYear();
  let month = new Date().getMonth();

  function renderCalendar(newYear, newMonth) {
    year = newYear || year;
    month = newMonth !== undefined ? newMonth : month;

    calendar.innerHTML = ''; // Clear existing calendar content
    calendar.appendChild(createMonth(year, month));
  }

  // Função para renderizar o calendário, mostrando apenas um mês
  function renderCalendar(year, month) {

    currentMonth.style.display = 'block'; // Exibe o mês selecionado
    // ... (seu código existente para criar o calendário)

    // Ocultar todos os meses, exceto o atual
    const allMonths = calendar.querySelectorAll('.month');
    allMonths.forEach(month => {
      if (monthDiv !== currentMonth) {
        monthDiv.style.display = 'none'; // Oculta os outros meses
      }
    });

    // Exibir o mês atual
    const currentMonth = calendar.querySelector(`.month:nth-child(${month + 1})`);
    currentMonth.style.display = 'block';
  }

  const style = document.createElement('style');
  style.textContent = `
  :root {
  --primary-color: #4CAF50;
  --secondary-color: #f0f0f0;
  }



  #calendar {
    display: grid;
    background-color: var(--secondary-color);
    grid-template-columns: repeat(8, 1fr);
    width: 1000px;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }

  /* Estilos para os dias da semana */
  .day.header {
    
    background-color: #f2f2f2;
    text-align: center;
  }

  .day:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .week {
    display: flex;
  }

  /* Estilos para os dias do mês */
  .day {
    flex: 1;
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    text-align: center;
  }

  /* Estilos para os eventos */
  .event {
   background-color: #e0e0e0;
   background-color: #f2f2f2;
   border: 1px solid #ccc;
   border-radius: 5px;
   padding: 5px;
  }

  /* Estilos para o modal */
  .modal {
  /* Estilos para o modal */
  }

  .day.selected {
    background-color: lightblue;
  }
  .event {
    font-size: 12px;
    color: gray;
  }

  .day.today {
    background-color: lightblue;
    font-weight: bold;
  }

  .event.important {
    background-color: #ff9800;
    color: white;
  }

  /* Tema escuro */
  .dark-theme {
    --primary-color: #fff;
    --secondary-color: #333;
    /* ... outros estilos para o tema escuro ... */
  }

  .month {
    margin: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    display: none; /* Ocultar todos os meses inicialmente */
  }
  
  @media (max-width: 768px) {
    #calendar {
      grid-template-columns: repeat(3, 1fr);
    }
  }  
  `;
  document.head.appendChild(style);

  function createMonth(year, month) {
    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');
    monthDiv.dataset.month = month;

    // Cabeçalho do mês
    const monthHeader = document.createElement('div');
    monthHeader.className = 'day header';
    monthHeader.textContent = months[month];
    monthDiv.appendChild(monthHeader);

    // Dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day header';
      dayHeader.textContent = day;
      monthDiv.appendChild(dayHeader);
    });

    // Dias do mês
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const emptyCell
        = document.createElement('div');
      emptyCell.className = 'day';
      monthDiv.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'day';
      dayCell.textContent = day;

      // Event handling (placeholder for future implementation)
      dayCell.addEventListener('click', () => {
        // Add event creation/editing logic here
      });

      monthDiv.appendChild(dayCell);
    }
    return monthDiv;
  }

  function toggleMonthDisplay(month) {
    const allMonths = document.querySelectorAll('.month');
    allMonths.forEach(monthDiv => monthDiv.style.display = monthDiv === month ? 'block' : 'none');
  }

  function renderCalendar(year, month) {
    // ... (seu código existente para criar o calendário)

    // Mostrar apenas o mês atual
    const allMonths = document.querySelectorAll('.month');
    allMonths.forEach(monthDiv => {
      monthDiv.style.display = monthDiv.dataset.month === month ? 'block' : 'none';
    });
  }

  function createMonth(year, month) {
    for (let month = 0; month < 12; month++) {
      const monthHeader = document.createElement('div');
      monthHeader.className = 'day header';
      monthHeader.textContent = months[month];
      calendar.appendChild(monthHeader);



      daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
      });

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        const emptyCell
          = document.createElement('div');
        emptyCell.className = 'day';
        calendar.appendChild(emptyCell);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day';
        dayCell.textContent = day;

        calendar.appendChild(dayCell);
      }
    }
  }

  createCalendar(2024);

  function adicionarEvento(dayCell) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <input type="text" id="eventInput" placeholder="Digite o evento">
      <input type="date" id="eventDate"> <button onclick="adicionarEventoAoCalendario()">Adicionar</button>
      <input type="time" id="eventTime">
    `;
    document.body.appendChild(modal);

    function adicionarEventoAoCalendario() {
      const eventText = document.getElementById('eventInput').value;
      const eventDate = document.getElementById('eventDate').value;
      const eventTime = document.getElementById('eventTime').value;
      // Criar elemento do evento
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event';
      eventDiv.textContent = eventText;
      eventDiv.dataset.date = eventDate; // Adicionar data como atributo de dados
      eventDiv.dataset.time = eventTime; // Armazena a hora do lembrete
      // Adicionar evento à célula do dia
      dayCell.appendChild(eventDiv);

      const novoEvento = {
        id: Date.now(), // Gera um ID único
        titulo: eventText,
        data: eventDate,
        hora: eventTime,
        // ... outras propriedades
      };

      // Adicionar o evento ao array de eventos
      events.push(novoEvento);

      // Se o evento for recorrente, gerar os eventos futuros
      if (novoEvento.periodicidade) {
        gerarEventosRecorrentes(novoEvento);
      }



      // Armazenar o evento no localStorage (opcional)
      const events = JSON.parse(localStorage.getItem('calendarEvents')) || {};
      events[eventDate] = events[eventDate] || [];
      events[eventDate].push(eventText);
      localStorage.setItem('calendarEvents', JSON.stringify(events));

      modal.remove();
    }
  }

  // ... (resto do código)

  // Edição e exclusão de eventos
  dayCells.forEach(dayCell => {
    dayCell.addEventListener('click', () => {
      const eventDiv = dayCell.querySelector('.event');
      if (eventDiv) {
        let action = prompt('O que deseja fazer com o evento?\n 1 - Editar\n 2 - Excluir');
        action = parseInt(action); // Converter para inteiro

        if (action === 1) {
          const newEventText = prompt('Digite o novo evento:', eventDiv.textContent);
          eventDiv.textContent = newEventText;
          // Atualizar o localStorage
        } else if (action === 2) {
          if (confirm('Tem certeza que deseja excluir este evento?')) {
            eventDiv.remove();
            // Remover evento do localStorage
          }
        } else {
          alert('Opção inválida. Tente novamente.');
        }
      }

    });
  });

  function adicionarEventoRecorrente(dayCell, eventData) {
    // Verifica a periodicidade do evento (diário, semanal, mensal, anual)
    const periodicidade = eventData.periodicidade;

    // Gerar eventos futuros com base na periodicidade
    switch (periodicidade) {
      case 'diario':
        // ... (lógica para gerar eventos diários)
        break;
      case 'semanal':
        // ... (lógica para gerar eventos semanais)
        break;
        // Armazenar o evento recorrente no localStorage
        const recurringEvents = JSON.parse(localStorage.getItem('recurringEvents')) || [];
        recurringEvents.push(eventData);
        localStorage.setItem('recurringEvents', JSON.stringify(recurringEvents));
    }

    // Cria o evento inicial
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.textContent = eventData.texto;
    eventDiv.dataset.date = eventData.data;
    dayCell.appendChild(eventDiv);

    // Armazena o evento no localStorage (opcional)
    const events = JSON.parse(localStorage.getItem('calendarEvents')) || {};
    events[eventData.data] = events[eventData.data] || [];
    events[eventData.data].push(eventData.texto);
    localStorage.setItem('calendarEvents', JSON.stringify(events));

    // De acordo com a periodicidade, cria eventos futuros (opcional)
    if (periodicidade === 'diario') {
      // Cria eventos para os próximos dias
    } else if (periodicidade === 'semanal') {
      // Cria eventos para as próximas semanas
    } else if (periodicidade === 'mensal') {
      // Cria eventos para os próximos meses
    } else if (periodicidade === 'anual') {
      // Cria eventos para os próximos anos
    }
  }

  function mostrarNotificacao(evento) {
    // Verifica se o usuário já concedeu permissão para notificações
    if (Notification.permission === 'granted') {
      // Cria a notificação
      const notification = new Notification('Lembrete', {
        body: `Você tem um evento: ${evento.titulo} às ${evento.hora}`,
        icon: 'caminho/para/seu/icone.png' // (opcional)
      });
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          mostrarNotificacao(evento);
        }
      });
    }
  }

  function criarCalendario(ano, calendario) {
    // ...
    // Cria o calendário para o calendário especificado
  }

  function verificarLembretes() {
    const recurringEvents = JSON.parse(localStorage.getItem('recurringEvents')) || [];
    const events = JSON.parse(localStorage.getItem('calendarEvents')) || {};

    // Iterar sobre os eventos e verificar se algum está próximo de acontecer
    for (const date in events) {
      events[date].forEach(event => {
        // Converter a data e hora do evento para um objeto Date
        const eventDateTime = new Date(`${date} ${event.time}`);

        // Comparar com a data e hora atual
        const now = new Date();
        const differenceInMinutes = (eventDateTime - now) / 1000 / 60;

        // Se o evento estiver próximo (ajuste o valor de acordo com sua necessidade)
        if (differenceInMinutes >= 0 && differenceInMinutes <= 30) {
          mostrarNotificacao({ titulo: event, hora: eventDateTime.toLocaleTimeString() });
        }
      });
    }
  }

  // Chamar a função de verificação periodicamente (por exemplo, a cada minuto)
  setInterval(verificarLembretes, 60000);
  setInterval(verificarEventosRecorrentes, 60 * 60 * 1000); // A cada hora

  function gerarEventosRecorrentes(evento) {
    // ... lógica para gerar os eventos futuros com base na periodicidade
  }

  calendar.appendChild(createMonth(year, month));
  renderCalendar(); // Renderiza o calendário inicial
});