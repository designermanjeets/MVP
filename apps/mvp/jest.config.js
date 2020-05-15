module.exports = {
  name: 'mvp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mvp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
