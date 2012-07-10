/**
 * enchant();
 * enchant.js ���g���O�ɕK�v�ȏ����B
 * (enchant.js �{�̂�A�ǂݍ��񂾃v���O�C���̒��Œ�`����Ă��� enchant.Foo, enchant.Plugin.Bar �Ȃǂ̃N���X���A
 *  ���ꂼ��O���[�o���� Foo, Bar �ɃG�N�X�|�[�g����B)
 */
enchant();

var CHARA_IMAGE_NAME = "http://enchantjs.com/assets/images/chara1.gif";
/*
 * window.onload
 * �y�[�W�����[�h���ꂽ�ۂɎ��s�����֐��B
 * ���ׂĂ̏����̓y�[�W�����[�h����Ă���s�����߁A window.onload �̒��Ŏ��s����B
 * ���� new Game(); �́A<body> �^�O�����݂��Ȃ��ƃG���[�ɂȂ�̂Œ��ӁB
 */
window.onload = function(){
    /**
     * new Game(width, height)
     * Game �I�u�W�F�N�g���쐬����B
     * ��ʂ̑傫���� 320�s�N�Z�� x 320�s�N�Z�� �ɐݒ肷��B
     */
    var game = new Game(320, 320);

    /**
     * Game.fps
     * �Q�[���� fps (frame per second) ���w�肷��B
     * ���̏ꍇ�A1�b�Ԃ�����15���ʂ��X�V�����B
     */
    game.fps = 30;
    /**
     * Game#preload
     * �K�v�ȃt�@�C���𑊑΃p�X�ň����Ɏw�肷��B
     * �t�@�C���͂��ׂāA�Q�[�����n�܂�O�Ƀ��[�h�����B
     */
    game.preload(CHARA_IMAGE_NAME);
    
    /**
     * Game#onload
     * ���[�h��������������Ɏ��s�����֐����w�肵�Ă���B
     * onload �v���p�e�B�� load �C�x���g�̃��X�i�Ƃ��ē����̂ŁA�ȉ���2�̏������͓����Ӗ��B
     *
     * game.onload = function(){
     *     // code
     * }
     *
     * game.addEventListener("load", function(){
     *     // code
     * })
     */
    game.onload = function(){
        /**
         * new Sprite(width, height)
         * �X�v���C�g�I�u�W�F�N�g���쐬����B
         * Sprite �́AEntity, Node, EventTarget ���p�����Ă���A���ꂼ��̃��\�b�h��v���p�e�B���g�����Ƃ��ł���B
         */
        bear = new Sprite(32, 32);

        /**
         * Sprite.image {Object}
         * Game#preload �Ŏw�肳�ꂽ�t�@�C���́AGame.assets �̃v���p�e�B�Ƃ��Ċi�[�����B
         * Sprite.image �ɂ���������邱�ƂŁA�摜��\�����邱�Ƃ��ł���
         */
        bear.image = game.assets[CHARA_IMAGE_NAME];

        /**
         * Node.x Node.y {Number}
         * x, y ���W���w�肷��B
         * viewport �̑傫���ɍ��킹�ĉ�ʂ��g��k������Ă���ꍇ���A
         * �I���W�i���̍��W�n�Ŏw��ł���B
         */
        bear.x = 0;
        bear.y = 0;

        /**
         * Sprite.frame {Number}
         * (width, height) �s�N�Z���̊i�q�Ŏw�肳�ꂽ�摜����؂�A
         * ���ォ�琔���� frame �Ԗڂ̉摜��\�����邱�Ƃ��ł���B
         * �f�t�H���g�ł́A0:����̉摜���\�������B
         * ���̃T���v���ł́A�V���N�}�������Ă���摜��\������ (chara1.gif �Q��)�B
         */
        bear.frame = 5;
        /**
         * Group#addChild(node) {Function}
         * �I�u�W�F�N�g���m�[�h�c���[�ɒǉ����郁�\�b�h�B
         * �����ł́A�N�}�̉摜��\������X�v���C�g�I�u�W�F�N�g���ArootScene �ɒǉ����Ă���B
         * Game.rootScene �� Group ���p������ Scene �N���X�̃C���X�^���X�ŁA�`��c���[�̃��[�g�ɂȂ���ʂ� Scene �I�u�W�F�N�g�B
         * ���� rootScene �ɕ`�悵�����I�u�W�F�N�g���q�Ƃ��Ēǉ����� (addChild) ���ƂŁA���t���[���`�悳���悤�ɂȂ�B
         * �����ɂ� enchant.Node ���p�������N���X (Entity, Group, Scene, Label, Sprite..) ���w�肷��B
         */
        game.rootScene.addChild(bear);

        /**
         * EventTarget#addEventListener(event, listener)
         * �C�x���g�ɑ΂��郊�X�i��o�^����B
         * ���X�i�Ƃ��ēo�^���ꂽ�֐��́A�w�肳�ꂽ�C�x���g�̔��s���Ɏ��s�����B
         * �悭�g���C�x���g�ɂ́A�ȉ��̂悤�Ȃ��̂�����B
         * - "touchstart" : �^�b�`/�N���b�N���ꂽ�Ƃ�
         * - "touchmove" : �^�b�`���W��������/�h���b�O���ꂽ�Ƃ�
         * - "touchend" : �^�b�`/�N���b�N�������ꂽ�Ƃ�
         * - "enterframe" : �V�����t���[�����`�悳���O
         * - "exitframe" : �V�����t���[�����`�悳�ꂽ��
         * enchant.js ��v���O�C���ɑg�ݍ��܂ꂽ�C�x���g�́A���ꂼ��̃^�C�~���O�Ŏ����Ŕ��s����邪�A
         * EventTarget#dispatchEvent �ŔC�ӂ̃C�x���g�𔭍s���邱�Ƃ��ł���B
         *
         */
        bear.addEventListener("enterframe", function(){
        
            // ���������L�[�ɂ���Ĉړ�������
            if (game.input.right) {
                bear.x += 2;
            }
            if (game.input.left) {
                bear.x -= 2;
            }

            if (game.input.up) {
                bear.y -= 2;
            }
            if (game.input.down) {
                bear.y += 2;
            }
            /**
             * this.age (Node.age) �́A�N�}�̃I�u�W�F�N�g�����܂łɉ���`�悳�ꂽ��
             * �N�}�̉摜��ς��đ���A�j���[�V������\�����邽�߂ɁA
             * frame �� 6 -> 7 -> 6 -> 7.. �Ə��Ԃɕς��Ă���B
             */
            this.frame = this.age % 2 + 6;
        });
    };

    /**
     * Game#start
     * �Q�[�����J�n����B���̊֐������s����܂ŁA�Q�[���͑ҋ@��ԂƂȂ�B
     * ����� Game#debug ���g�����ƂŁA�f�o�b�O���[�h�ŋN�����邱�Ƃ��ł���B
     * Game#pause(); �ňꎞ��~���A Game#resume(); �ōĊJ���邱�Ƃ��ł���B
     */
    game.start();
};
