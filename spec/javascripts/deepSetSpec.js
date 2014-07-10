describe('deepSet', function() {
  it('should set at the given path', function() {
    var obj = {};
    Ember.Resource.deepSet(obj, 'a', 'foo');

    expect(obj.a).to.not.equal(undefined);
    expect(obj.a).to.equal('foo');
  });

  it('should overwrite at the given path', function() {
    var obj = {a: 'foo'};
    Ember.Resource.deepSet(obj, 'a', 'bar');

    expect(obj.a).to.not.equal(undefined);
    expect(obj.a).to.equal('bar');
  });

  it('should create empty Object at missing nodes', function() {
    var obj = {};
    Ember.Resource.deepSet(obj, 'a.b.c', 'foo');

    expect(obj.a).to.not.equal(undefined);
    expect(Ember.typeOf(obj.a)).to.equal('object');

    expect(obj.a.b).to.not.equal(undefined);
    expect(Ember.typeOf(obj.a.b)).to.equal('object');

    expect(obj.a.b.c).to.not.equal(undefined);
    expect(obj.a.b.c).to.equal('foo');
  });

  it("should not pass a reference to another objects data", function() {
    var ticket = {
      data: {
        group: {
          id: 1,
          name: 'Support'
        }
      }
    };

    var group = {
      data: {
        id: 2,
        name: 'Development'
      }
    };

    Ember.Resource.deepSet(ticket, 'data.group', group.data);

    expect(ticket.data.group.id).to.equal(group.data.id);
    expect(ticket.data.group.name).to.equal(group.data.name);

    expect(ticket.data.group).not.to.equal(group.data);
  });

});
