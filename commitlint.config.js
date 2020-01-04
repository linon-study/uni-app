module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'header-max-length': [2, 'always', 72],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'test',
                'chore',
                'revert'
            ]
        ]
    }
};