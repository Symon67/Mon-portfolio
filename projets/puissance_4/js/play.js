
(function($) {
    
    $.fn.Puissance4 = function (){
        this.player = 'tokenred';
        that = this;
        this.each(function () {
            grid(this);
            setupEventListeners();
        
        });
        
        function grid(div) {
            var colonne = prompt('Choisir le nombre de colonnes');
            var ligne = prompt('Choisir le nombre de lignes');
            const $board = $(that);
            for (let row = 0; row < ligne; row++) {
                const $row = $('<div>')
                .addClass('ligne');
                for (let col = 0; col < colonne; col++) {
                    const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-row', row)
                    .attr('data-col', col);
                    $row.append($col);
                    
                    
                }
                $row.appendTo(div);
            }
        }
        
        function setupEventListeners() {
            const $board = $(that);
            function findLastEmptyCell(col) {
                const cells = $(`.col[data-col='${col}']`);
                for (let i = cells.length - 1; i >= 0; i--) {
                    const $cell = $(cells[i]);
                    if ($cell.hasClass('empty')) {
                        return $cell;
                    }
                }
                return nulll;
            }
            
            $board.on('mouseenter', '.col.empty', function() {
                const col = $(this).data('col');
                const $lastEmptyCell = findLastEmptyCell(col);
                $lastEmptyCell.addClass(`next-red`);
                console.log($lastEmptyCell);
                
            })
            
            $board.on('mouseleave', '.col', function() {
                $('.col').removeClass(`next-red`);
            });  
            
            $board.on('click', '.col.empty', function() {
                const col = $(this).data('col');
                const rows = $(this).data('col');
                if(that.player === 'tokenred'){
                    that.player = 'tokenyellow';
                    $('.nomj').text('Au tour du joueur rouge');
                }
                else{
                    that.player = 'tokenred';
                    $('.nomj').text('Au tour du joueur jaune');

                }
                $('.col.empty.next-red').addClass(`${that.player}`).removeClass(`empty next-red`);
                console.log($('.col.empty.next-red'));
            });
        }   
    } 
    })(jQuery);