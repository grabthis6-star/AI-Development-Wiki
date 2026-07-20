export function createPluginRegistry(pluginDefinitions = []) {
  const plugins = new Map();

  function register(plugin) {
    if (!plugin?.id || !plugin?.name) throw new Error('Plugin requires id and name');
    if (plugins.has(plugin.id)) throw new Error(`Duplicate plugin id: ${plugin.id}`);
    plugins.set(plugin.id, Object.freeze({ enabled: true, order: 100, ...plugin }));
  }

  pluginDefinitions.forEach(register);

  const enabled = () => [...plugins.values()]
    .filter(plugin => plugin.enabled !== false)
    .sort((a, b) => a.order - b.order);

  return Object.freeze({
    register,
    get: id => plugins.get(id),
    all: () => [...plugins.values()],
    enabled,
    navigation: () => enabled().filter(plugin => plugin.navigation),
    dashboard: () => enabled().filter(plugin => plugin.dashboard),
    commands: () => enabled().flatMap(plugin =>
      (plugin.commands || []).map(command => ({ pluginId: plugin.id, ...command }))
    )
  });
}
